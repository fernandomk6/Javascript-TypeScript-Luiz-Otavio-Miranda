# Promise

É um objeto que representa o sucesso ou a falha de uma operação assíncrona.

## O que é uma operação assíncrona?

Código assícrono, pode iniciar um processo agora, e finaliza-lo, posteriormente.
Não interrompe ou bloqueia o código síncrono, ou código 'normal'.

Funções assíncronas são empilhadas em uma outra thread, diferente da thread príncipal (síncrona).
Essa 'thread secundária', não segue a ordem 'normal', ela executa as funções que estão empilahdas,
na ordem que elas são resolvidas. Isso pode ser facilmente testado com um setTimeout.

```javascript
console.log('Sincrono e rápido');
console.log('Sincrono e rápido... espera um pouco...');

setTimeout(() => {
  console.log('Se passaram 2 segundos');
}, 2000);

setTimeout(() => {
  console.log('Estou tão venho que nem consigo mais fal..');
}, 10000);

setTimeout(() => {
  console.log('Se passaram 4 segundos');
}, 4000);

/*
  Sincrono e rápido
  Sincrono e rápido... espera um pouco...
  Se passaram 2 segundos
  Se passaram 4 segundos
  Estou tão venho que nem consigo mais fal..
*/ 
```

## Criando uma promise

Na Grande maioria das vezes você irá usar uma promise ja construida por alguem,
ou por alguma biblioteca.

### Instanciando

Para criar suas próprias promises, o construtor `Promise` deve ser usado.

`const myPromise = new Promise(callback);`

### Callback

O construtor promise, receberá como argumento uma função de callback.
Essa função de callback recebe 2 argumentos, resolve e reject. Resolve e Reject
são funções.

Resolve e reject são funções que podem ser chamadas dentro do callback.
Resolve deve ser usada quando a nossa operação assíncrona for bem sucedida.
Reject deve ser usado quando a nossa operação assíncrona falhar.

```javascript
const myPromise = new Promise((resolve, reject) => {
  const myContition = true;
  if (myContition) {
    resolve('Resolvida');
  } else {
    reject('Rejeitada');
  }
});
```

## Método then

É responsavél por receber a resposta de sucesso da promise.
O método then recebe como argumento uma função de callback. 
o callback do then recebe como argumento o argumento que foi passado para a 
função resolve no callback do construtor Promise.

```javascript
const myPromise = new Promise((resolve, reject) => {
  const successParam = 33;
  resolve(successParam);
});

myPromise.then(successParam => {
  console.log(successParam);
});

// 33
```

Perceba que `successParam` que foi passado para o resolve, no callback do construtor Promise,
foi recebido no parametro do callback do then.

- Criamos uma promise que envolve uma função.
- Configuramos uma resposta para quando a resolução da promise for bem sucedida.
- Através do resolve, passamos um parametro para a função de callback do then.

## Encadeando then

O segundo then, recebe uma função de callback como argumento, essa função
recebe como argumento, o valor retornado pelo primeiro then.

```javascript
const myPromise = new Promise((resolve, reject) => {
  const successParam = 33;
  resolve(successParam);
});

myPromise
  .then((successParam) => {
    console.log(successParam); // 33
    return 4;
  })
  .then(firstThenReturn => {
    console.log(firstThenReturn); // 4
  })
  .then(secondThenReturn => {
    console.log(secondThenReturn); // undefined
  });
```

Esse encadeamento so é possível, pois o método then, sempre retorna,
uma nova promise.

## Tratando erros

Existe um método responsável por lidar com a rejeição, ou seja quando a resolução
da promise não for bem sucedida. Esse método é o catch.

O método catch recebe como argumento uma função. Essa função recebe como argumento
o argumento que foi passado para a função reject, no momento da instanciação
do objeto promise.

O método catch so será executado em duas situações.

- Quando o método reject, do callback do constructor promise, for chamado.
- Quando o código dentro de algum then, lança um erro.

O valor passado para a função reject, é recebido como argumento para
o callback do método catch.

## Método finally

O método finally deve ser usado quando independentemente de ser resolvida ou ser rejeitada,
você deseja fazer alguma coisa. O finally retorna uma nova promise, com o valor herdado do ultimo,
resolve ou reject.

```javascript
const myPromise = new Promise((resolve, reject) => {
  const myData = [1, 2, 3];
  setTimeout(() => {
    if (myData) {
      resolve(myData);
    } else {
      reject('Promise rejeitada');
    }
  }, 2000);
});

const newPromise = myPromise
  .then((response) => {
    console.log(response);
    return response;
  })
  .catch(error => {
    console.log(error);
    return error;
  })
  .finally(() => {
    console.log('Finally executado');
  });

setTimeout(() => {
  console.log(newPromise);
}, 4000);

/*
  [ 1, 2, 3 ]
  Finally executado
  Promise { [ 1, 2, 3 ] }
*/
```

## status pending, rejected, e fulfilled

### Pending 

É o status inicial da promise, indica que essa promise nem foi concluída com sucesso, e nem
falho. É apenas o estado inicial dela. Ainda está sendo aguardado um retorno. A promessa não
está pronta. Caso o método then seja chamado, so será executado quando a promise estiver concluída,
ou seja, rejected ou fulfilled.

### Reject

É o status da promise quando ela é rejeitada. A promise é rejeitada quando a função reject é chamada.
A função reject é passada como argumento para o callback do construtor promise. A Promisse também fica
com status reject quando um erro é lançado dentro do callback de qualquer método then. 

### Fulfilled 

É o status quando a promise é resolvida. Quando a função resolve é chamada. Essa função
é passada como argumento para o callback do construtor Promise.

### Exemplos

```javascript
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Resolvida');
  }, 5000);

  setTimeout(() => {
    reject('Rejeitada');
  }, 6000);
});

console.log(p
  .then(response => {
    throw new Error('Me derrubaram aqui ó');
  })
  .catch(error => console.log(error.message))
);

console.log('Verificando status da promise instantanêo', p);

setTimeout(() => {
  console.log('Verificando status da promise após 3 segundos', p);
}, 3000);

setTimeout(() => {
  console.log('Verificando status da promise apos 6 segundos', p);
}, 6000);

// Promise { <pending> }
// Verificando status da promise instantanêo Promise { <pending> }
// Verificando status da promise após 3 segundos Promise { <pending> }
// Me derrubaram aqui ó
// Verificando status da promise apos 6 segundos Promise { 'Resolvida' }
```
## Praticando com request real

Segue abaixo um exemplo feito com uma API real usando o método fetch,
que retorna uma promise.

````javascript
const url = 'https://dog.ceo/api/breeds/image/random';

const promiseFetch = fetch(url);

promiseFetch
  .then(response => {
    return response.json();
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

O método fetch faz uma requisição http e retorna uma promise.
Essa promise quando resolvida, irá trazer a resposta dessa requisição.
