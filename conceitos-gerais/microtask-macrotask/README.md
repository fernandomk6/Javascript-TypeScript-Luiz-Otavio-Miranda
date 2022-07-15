# Microtask e Macrotask

O callback da promise é enviado para a call stack, depois para a microtask, e fica 
na microtast atea call stack estar vazia. Digamos que a promise fica pronta, na 
microtask esperando ser chamada com um then ou await. Quando é chamada, ela vem 
assíncronamente. Uma promise fica com status resolved quando o seu callback executa 
a função resolve. Fica com status reject quando ler a função reject ou quando 
alguma execeção é lançada em algum then ou bloco try (async function).

São executadas imediatamente após a atual operação completar, antes mesmo de qualquer 
outro evento de E/S que seja disparado.

```javascript
process.nextTick(() => console.log('nextTick')); 
// log is add to microtask queue
setImmediate(() => console.log('setImmediate')); 
// log is add direct to macrotask queue
setTimeout(() => console.log('setTimeout'), 0); 
// log is add to web api section after, to macrotask
const interval = setInterval(() => console.log('setInterval'), 0); 
// sema as above, and assigned interval do close
setTimeout(() => clearInterval(interval), 0); 
// clearInterval add to web api section adter, to macrotask
```

Cada "volta", do event loop é chamada de tick.

O event loop sempre será executado quando a call stack estiver vazia.
O event loop dará prioridade para concluir todos os microtask, antes de concluir
qualquer bloco que esteja na macrotask.

## Loop de eventos no navegador

[xiaobo.blog](https://xiaobo.blog/event-loop-in-the-browser-and-in-node)

![V8-Map](https://cdn.hashnode.com/res/hashnode/image/upload/v1638793812677/_05hNt2Da.webp?auto=compress,format&format=webp)

Diferentes origens de tarefas serão atribuídas a diferentes filas de tarefas. As fontes de 
tarefas podem ser divididas em microtarefas e macrotarefas.

```javascript
console.log('script start')

async function async1() {
  await async2()
  console.log('async1 end')
}
async function async2() {
  console.log('async2 end')
}
async1()

setTimeout(function() {
  console.log('setTimeout')
}, 0)

new Promise(resolve => {
  console.log('Promise')
  resolve()
})
  .then(function() {
    console.log('promise1')
  })
  .then(function() {
    console.log('promise2')
  })

console.log('script end')
```

Primeiro, vamos explicar a ordem de execução de async e await do código acima.

Quando chamamos a função async1, o async2 end será gerado imediatamente e a função 
retornará uma Promise. Então, quando encontrarmos await, o thread poderá executar 
o código fora de async1, para que possamos considerar completamente await como um 
yield O logotipo do thread. Então, quando o código síncrono for executado, ele 
executará todo o código assíncrono, retornará à posição de espera para executar 
a função de resolução da promessa retornada, que colocará a resolução na fila de 
microtarefas e a executará . O callback em then, quando os callbacks nos dois 
then forem todos executados, eles retornarão para a posição await para processar 
o valor de retorno. Neste momento, você pode considerá-lo como 
Promise.resolve(return value).then(), e depois depois de await O código é 
todo encapsulado no retorno de chamada de then, então console.log('async1 end') 
será executado primeiro em setTimeout. Se você acha que a explicação acima ainda 
é um pouco complicada, vou transformar essas duas funções de assíncrono em código 
que você possa entender.

```javascript
new Promise((resolve, reject) => {
console.log('async2 end')
// Promise.resolve() inserts the code into the end of the microtask queue
// resolve insert the end of the micro task queue again
resolve(Promise.resolve())
}).then(() => {
console.log('async1 end')
})

```

Em outras palavras, se await for seguido por Promise, async1 end precisa esperar 
três tiques antes de poder ser executado. Na verdade, o desempenho é relativamente 
lento, então a equipe V8 pegou emprestado de um bug no Node 8 e reduziu os três ticks
 para dois na parte inferior do motor. No entanto, esta prática é realmente contra 
 a lei e os regulamentos. Claro, os regulamentos também podem ser alterados. Este 
 é um PR da equipe V8. Esta prática foi aprovada.

### Conclusão 

Portanto, a sequência de execução do Event Loop é a seguinte: －Primeiro execute 
o código de sincronização, que é uma tarefa macro －Quando todo o código síncrono 
for executado, a pilha de execução está vazia, consulte se há código assíncrono a 
ser executado micro tarefas Quando todas as micro tarefas são executadas, a página 
será renderizada se necessário

Portanto, embora o código acima setTimeout seja escrito antes de Promise, porque 
Promise é uma micro tarefa e setTimeout é uma tarefa macro, haverá a impressão 
acima. As micro tarefas incluem process.nextTick, promessa e MutationObserver. 
As tarefas de macro incluem script, setTimeout, setInterval, setImmediate, I/O, 
renderização de UI. Muitas pessoas aqui têm um mal-entendido, pensar que microtarefas 
são mais rápidas do que macrotarefas está realmente errado. Como o script está 
incluído na tarefa de macro, o navegador executará primeiro uma tarefa de macro 
e, em seguida, a tarefa de micro será executada primeiro se houver código assíncrono.

## Avançado

Aprofundando em alguns conceitos

### Promise

O callback que o construtor promise recebe como parametro é Executado de forma síncrona, na stack.

```javascript
console.log('Inicio');

const myPromise = new Promise(function (resolve, reject) {
  for (let index = 0; index < 100000000000; index++) {
    
  }
  console.log('myPromise callback');
  resolve('Resolveu');
});

console.log('Fim');
```

O retorno será
- inicio
- myPromise callback (depois de um longo loop)
- Fim

Isso mostra que o callback da promise é executado de forma síncrona.

Quando o callback da promise executa a função resolve, a promise fica com status
fulfilled. Quando a função reject é executada ou alguma exceção é lançada em then ou
blocos try catch em funções async, a promise fica com status rejected.

Porém muitas vezes o resolve do callback da promise está encapsulado em algum bloco
assíncrono, como timers ou requests. Vamos ver um exemplo depois explicar com mais detalhes.

```javascript
console.log('Inicio');

const myPromise = new Promise(function (resolve, reject) {
  console.log('myPromise callback');
  setTimeout(function() {
    console.log('myPromise callback setTimeout callback');
    resolve('myPromise callback setTimeout callback resolve');
  });
});

console.log('Fim');

/*
-> Inicio
-> myPromise callback
-> Fim
-> myPromise callback setTimeout callback
*/
```

Perceba que o myPromise callback foi executado de forma síncrona, depois do log('inicio').
Dentro desse callback havia um setTimeout, que é assíncrono, e quando chamado, é adicionado
a sessão web API, quando contado seu tempo minimo em milissegundos, é adicionado na macrotask,
e apenas será executado, quando a call stack estiver vazia. Por isso ele é executado,
apenas no final do código. Logo a promise so ficou resolvida, no final do código.

Abaixo um exemplo um pouco mais complexo, porém fundamental.

```javascript
console.log('Inicio');

const myPromise = new Promise(function (resolve, reject) {
  console.log('myPromise callback');
  setTimeout(function() {
    console.log('myPromise callback setTimeout callback');
    resolve('myPromise callback setTimeout callback resolve');
  });
});

myPromise.then(function(response) {
  console.log('myPromise then');
  console.log(response);
});
console.log('Fim');

/*
-> inicio
-> myPromise callback
-> fim
-> myPromise callback setTimeout callback
-> myPromise then
-> myPromise callback setTimeout callback resolve

- macrotask
myPromise callback setTimeout

- microtask
myPromise then
*/
```

O callback do then é adicionado na microtask. E so é chamado para ser executado quando a promise
está fullfiled. A promise so fica fulfilled quando o resolve é chamado. O resolve está sendo chamado
dentro de um setTime, logo, o setTime deixa a promise resolvida, e então o then é executado.

Perceba que tanto a microtask quando a macro task so são executadas após o codigo sincrono for concluido.
A microtask tem sua fila executada inteiramente antes da proxima task na macrotask ser chamada.
Vamos testar isso.

```javascript
console.log('Inicio');

setTimeout(function() {
  console.log('setTimeout with time 0');
}, 0);

const myPromise = Promise.resolve('Promise resolvida');
console.log(myPromise);

myPromise.then(function(value){console.log(value)});

console.log('Fim');

/*
-> Inicio
-> Promise { 'Promise resolvida' }
-> Fim
-> Promise resolvida
-> setTimeout with time 0

- macrotask
-> setTimeout

- microtask
-> myPromise.then callback
*/
```

Perceba que o then da promise foi executado antes do callback do setTimeout,
isso acontece por que o callback do then é um microtask, ou seja é executado antes.
Caso tivessémos mais de 1 then, todos seriam executados antes do setTimeout.

Exemplo com mais de um then

```javascript
console.log('Inicio');

setTimeout(function() {
  console.log('setTimeout with time 0');
}, 0);

const myPromise = Promise.resolve('Promise resolvida');
const myPromise2 = Promise.resolve('Promise resolvida 2');

console.log(myPromise);
console.log(myPromise2);

myPromise.then(function(value){console.log(value)})
  .then(function(isUndefined){if(!isUndefined){console.log('segundo then é undefined');}});

myPromise2.then(function(value){console.log(value)});

console.log('Fim');

/*
- log
-> inicio
-> promise 1 resolved
-> promise 2 resolved
-> fim
-> promise resolvida
-> promise resolvida 2
-> segundo then é undefined
-> setTimeout with time 0


- macrotask
-> settimeout

- microtask
promise1.then
promise2.then
promise1.then.then

*/
```

Perceba a ordem que os thens foram adicionados na microtask. Primeiro o then da promise1,
depois o then da promise2, depois o segundo then da promise1, isso por que,
o segundo then da promise1, so foi adicionado na microtask quando o primeiro foi executado. 
Ou seja, foi para o fim da fila.

Um outro exemplo

```javascript
console.log('Inicio');

setTimeout(function() {
  console.log('setTimeout with time 0');
}, 0);

const myPromise = Promise.resolve('Promise resolvida');
const myPromise2 = Promise.reject('Promise rejeitada 2');

console.log(myPromise);
console.log(myPromise2);

myPromise.then(function(value){console.log(value)})
  .then(function(isUndefined){if(!isUndefined){console.log('segundo then é undefined');}});

myPromise2.then(function(value){console.log(value)})
  .catch(function(error){console.log(error)});

console.log('Fim');

/*
- log
inicio
myPromise fullfiled
myPromise2 rejected
fim
Promise resolvida
segundo then é undefined
Promise rejeitada 2
setTimeout with time 0

- microtask
myPromise.then
myPromise2.then
myPromise.then.then
myPromise2.then.catch


- macrotask
setTimeout
*/
```

### Async

Uma função async apenas tem assíncronidade quando usado o seu valor de retorno, ou awaits dentro de seu bloco.
Vamos começar aos poucos, vendo o que uma chamada de função async faz.

```javascript
console.log('Inicio');

setTimeout(function() {
  console.log('setTimeout with time 0');
}, 0);

async function asyncFunction() {
  console.log('asyncFunction executada');
}

asyncFunction();

console.log('Fim');

/*
- log
inicio
asyncFunction executada
fim
setTimeout with time 0

- microtask

- macrotask
setTimeout

*/
```

Perceba que a chamada da função async ocorreu de forma síncrona, antes do fim.
Isso ocorreu pois apenas chamamos um bloco de função normal, não usamos o assíncronismo.
Esse "assíncronismo" está baseado no fato das funções async retornar uma promise.
Ou seja async é um bloco de codigo para lidar com promises **apenas**.

Quando isso é feito, se torna assíncrono. Caso você não queira lidar com promises.
Não faz sentido usar funções async. Pois como vimos o bloco por si só não é executado 
assíncronamente.

Vamos testar agora com promise

```javascript
console.log('Inicio');

const myPromise = new Promise(function(resolve) {
  console.log('myPromise callback');
  resolve('myPromise resolvida');
});

setTimeout(function() {
  console.log('setTimeout with time 0');
}, 0);

async function asyncFunction() {
  console.log('asyncFunction executada');
  const response = await myPromise;
  console.log(response); 
}

asyncFunction();

console.log('Fim');

/*
- log
inicio
myPromise callback
asyncFunction executada
fim
myPromise resolvida

- microtask
await promise

- macrotask
setTimeout
*/
```

o await vai adicionar o "then" da promise para a microtask e todo o codigo abaixo do await
será executado apos esse microtesk resolve.
Perceba que o asynct function foi executado de forma síncrona. O "then" ou await que foi
executado assíncronamente, o await chama o "then" e o then é adicionado ao microtask.
A diferença aqui, e o ponto chave das async function é. Todo o código abaixo da palavra chave
await, funciona como um callback que será executado quando o then terminar. É como
um then.then. Porém é escrito como await -> o que vem depois.

Vamos tentar agora com promises rejected e erros

```javascript
console.log('Inicio');

const myPromise = new Promise(function(resolve) {
  console.log('myPromise callback');
  resolve('myPromise resolvida');
});

setTimeout(function() {
  console.log('setTimeout with time 0');
}, 0);

async function asyncFunction() {
  console.log('asyncFunction executada');
  try {
    throw new Error('Erro na async function');
    const response = await myPromise;
    console.log(response); 
  } catch (error) {
    console.log(error.message);
  }
}
asyncFunction();

console.log('Fim');

/*
- log
inicio
mypromise callback
asyncfunction executada
erro na async function
fim
settime

- microtask

- macrotask
settimeout
*/
```

Como vá vimos o bloco async funciona de forma síncrona quando chamado.
Aqui o que temos não é nada mais nada mesmo que uma função normal que lança um erro
de forma síncrona. E depois o fluxo segue normal. Não houve codígo assíncrono pois
a promise não foi chamada.

Exemplo com throw erro

```javascript
console.log('Inicio');

const myPromise = new Promise(function(resolve) {
  console.log('myPromise callback');
  resolve('myPromise resolvida');
});

setTimeout(function() {
  console.log('setTimeout with time 0');
}, 0);

async function asyncFunction() {
  console.log('asyncFunction executada');
  try {
    const response = await myPromise;
    console.log(response); 
    throw new Error('Erro na async function');
  } catch (error) {
    console.log(error.message);
  }
  console.log(myPromise);
}
asyncFunction();

console.log('Fim');

/*
- log
inicio
mypromise callback
asyncfunction executada
Fim
myPromise resolvida
Erro na async function
promise fulfilled

- microtask
await myPromise

- macrotask
settimeout
*/
```

Novamente, o await é adicionado como um microtask e todo seu codigo abaixo apenas é executado
apois o await ser concluido. Perceba também que a myPromise não fica rejeitada,
o que ficará rejeitada será a promise retornada pela função async.

Último exemplo unindo todos os conceitos

```javascript
console.log('Inicio');

const myPromise = new Promise(function(resolve) {
  console.log('myPromise callback');
  resolve('myPromise resolvida');
});

setTimeout(function() {
  console.log('setTimeout with time 0');
}, 0);

async function asyncFunction() {
  console.log('asyncFunction executada');
  const response = await myPromise;

  console.log(response); 
  throw new Error('Erro na async function');
  
  console.log(myPromise);
}

asyncFunction().then(function(resolve) {
  console.log(resolve);
}).catch(function(error) {
  console.log(error.message);
});

console.log('Fim');

/*
- log
inicio
promise callback
async executado
fim
promise resolved
Erro na async function
time

- microtask
await async
async return then

- macrotask
settime

*/
```

O ponto chave para entender esse código é lembrar que o que está abaixo do await é executado apos a promise resolve,
ou seja apenas quando sua stack está vazia. O segundo ponto é que quando uma execeção é lançada dentro do bloco async,
a promise retornada pela async é rejeitada.