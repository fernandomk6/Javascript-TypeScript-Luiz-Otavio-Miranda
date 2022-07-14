# Engine

Uma engine Javascript é um programa ou um interpretador que executa 
código Javascript. Uma engine Javascript pode ser implementada como 
um interpretador padrão, ou apenas um compilador que na hora certa 
(Just-in-time)  compila Javascript para bytecode de alguma forma.

Lista de projetos populares que estão implementando uma engine Javascript

- V8: Open source, desenvolvido pelo Google, escrito em C++
- Rhino: Mozilla Foundation, open source, desenvolvido em Java
- SpiderMonkey: A primeira engine Javascript, Firefox
- JavaScriptCore: Open source, comercializado como Nitro desenvolvido pela Apple
- KJS: KDE’s engine desenvolvido por Harri Porten para o projeto KDE Konqueror
- Chakra (JScript9): Internet Explorer
- Chakra (JavaScript): Microsoft Edge
- Nashorn: Open source como parte do OpenJDK, Oracle Java Languages e Tool Group
- JerryScript: É uma engine leve para a internet das coisas(IOT).

## Thread

Javascript é uma linguagem de programação single-thread, o que significa 
que ela tem um única Call Stack. Portanto ela só pode fazer uma coisa de 
cada vez.

### Call Stack

A Call Stack é uma estrutura de dados que armazena basicamente onde no 
programa nós estamos. Se entrarmos em uma função, nós colocamos ela sobre 
o topo da Stack. Se retornamos de uma função, saímos do topo da stack. 
Isso é tudo que a stack pode fazer.

```javascript
function multiply(x, y) {
  return x * y;
}

function printSquare(x) {
  var s = multiply(x, x);
  console.log(s);
}

printSquare(5);

// # Stack Frames
// 0.
// 1. -> printSquare
// 2. -> printSquare -> multilply
// 3. -> printSquare -> console.log
// 4. -> printSquare
// 5.

```
#### Stack Frame 

Cada entrada na call stack é chamada de stack frame

#### Stack Trace

Um rastreamento de pilha é essencialmente uma trilha de navegação para o 
seu software. Você pode ver facilmente o rastreamento de pilha em JavaScript 
adicionando o seguinte em seu código `conosole.trace()`. Veja o exemplo.

```javascript
function inner() {
  console.trace();
}

function outer() {
  inner();
}

outer();

// Trace
//   at inner
//   at outer
```

#### Exceder to tamanho da Stack

Isso acontece quando você chega no tamanho máximo 
da Call Stack. E o que poderia acontecer muito facilmente, especialmente 
se você está utilizando recursão sem testar seu código muito extensivamente. 
Dê uma olhada neste exemplo de código

```javascript
function foo() {
  foo();
}
foo();

// RangeError: Maximum call stack size exceeded
```

Esse erro foi lançado pois a stack alcançou o número mumero máximo de chamadas.
Perceba que a função foo chama a ela mesmo infinitamente.

Os stack frames seriam mais ou menos assim.

0. 
1. foo
2. foo -> foo
3. foo -> foo -> foo
4. foo -> foo -> foo -> foo
5. foo -> foo -> foo -> foo -> foo...
9. throw error

## Concorrência e o Event Loop

### Entendendo o problema

O que acontece quando você tem chamadas de função na Call Stack que tomam uma enorme 
quantidade de tempo a fim de ser processada? Por exemplo, imagine que você quer fazer 
alguma transformação complexa de imagem com Javascript no browser.

Você pode perguntar — Por que isso é um problema ? O problema é que enquanto a Call 
Stack tem funções para executar, o browser não pode atualmente fazer qualquer coisa 
mais — ele está bloqueado. Isso significa que o browser não pode renderizar, ele não 
pode executar qualquer outro código, está preso. E isso cria problemas se você quer 
UIs fluídas em seu código.

E esse não é o único problema. Uma vez que o browser começa processar muitas tarefas 
na Call Stack, ele pode parar de responder por um longo tempo. E a maioria dos 
browsers tomam uma ação criando um erro, perguntando se você quer encerrar a página 
web.

![Page(s) unresponsive](https://miro.medium.com/proxy/1*WlMXK3rs_scqKTRV41au7g.jpeg)

como podemos executar códigos pesados ​​sem bloquear a interface do usuário e deixar o 
navegador sem resposta? Bem, a solução é **callbacks assíncronos**.

## Event Loop

A engine JS não é executada isoladamente — ela é executada dentro de um ambiente de 
hospedagem , que para a maioria dos desenvolvedores é o típico navegador da Web ou 
o Node.js. Atualmente, o JavaScript é incorporado em todos os tipos de dispositivos,
desde robôs até lâmpadas. Cada dispositivo representa um tipo diferente de ambiente 
de hospedagem para a engine JS.

O denominador comum em todos os ambientes é um mecanismo interno chamado 
**event loop**, que lida com a execução de vários fragmentos de seu programa ao longo 
do tempo, sempre chamando o engine de JS.

Assim, por exemplo, quando seu programa JavaScript faz uma solicitação Ajax para 
buscar alguns dados do servidor, você configura o código de "resposta" em uma função 
(retorno de chamada ou callback) e engine JS informa ao ambiente de hospedagem:

> “Ei, vou suspender a execução por enquanto, mas sempre que você terminar com essa 
> solicitação de rede e tiver alguns dados, chame esta função novamente .”

O navegador é então configurado para escutar a resposta da rede, e quando tiver algo 
para retornar a você, ele agendará a função de retorno de chamada a ser executada 
inserindo-a no loop de eventos .

Vamos ver o diagrama abaixo:

![Event Loop](https://miro.medium.com/max/1400/1*FA9NGxNB6-v1oI2qGEtlRQ.png)

O Event Loop tem um trabalho simples: monitorar a call stack e a fila de retorno 
(callback queue). Se a call stack estiver vazia, ela pegará o primeiro evento da 
fila (callback queue) e a empurrará para a call stack, que efetivamente a executa.
Tal iteração é chamada de tick no Event Loop. Cada evento é apenas um callback de função.

Vamos executar esse código e ver o que acontece.

```javascript
console.log('Hi');

setTimeout(function cb1() { 
    console.log('cb1');
}, 5000);

console.log('Bye');
```

1. O estado inicial, tudo está vazio.

![](https://miro.medium.com/max/1400/1*9fbOuFXJHwhqa6ToCc_v2A.png)

2. console.log('Hi') é adicionado à call stack.

![](https://miro.medium.com/max/1400/1*dvrghQCVQIZOfNC27Jrtlw.png)

3. console.log('Hi') é executado.

![](https://miro.medium.com/max/1400/1*yn9Y4PXNP8XTz6mtCAzDZQ.png)

4. console.log('Hi') é removido da pilha de chamadas.

![](https://miro.medium.com/max/1400/1*iBedryNbqtixYTKviPC1tA.png)

5. setTimeout(function cb1() { ... }) é adicionado à call stack.

![](https://miro.medium.com/max/1400/1*HIn-BxIP38X6mF_65snMKg.png)

6. setTimeout(function cb1() { ... }) é executado. O navegador cria um cronômetro 
como parte das APIs da Web. Ele vai lidar com a contagem regressiva para você.

![](https://miro.medium.com/max/1400/1*vd3X2O_qRfqaEpW4AfZM4w.png)

7. O setTimeout(function cb1() { ... }) está completo e é removido da call stack.

![](https://miro.medium.com/max/1400/1*_nYLhoZPKD_HPhpJtQeErA.png)

8. console.log('Bye') é adicionado à call stack.

![](https://miro.medium.com/max/1400/1*1NAeDnEv6DWFewX_C-L8mg.png)

9. console.log('Bye') é executado.

![](https://miro.medium.com/max/1400/1*UwtM7DmK1BmlBOUUYEopGQ.png)

10. console.log('Bye') é removido da call stack.

![](https://miro.medium.com/max/1400/1*-vHNuJsJVXvqq5dLHPt7cQ.png)

11. Após pelo menos 5000 ms, o temporizador é concluído e ele envia o retorno de 
chamada cb1 para a fila de retorno de chamada.

![](https://miro.medium.com/max/1400/1*eOj6NVwGI2N78onh6CuCbA.png)

12. O Event Loop retira o cb1 da Fila de Retorno de Chamada e o envia para a call stack.

![](https://miro.medium.com/max/1400/1*jQMQ9BEKPycs2wFC233aNg.png)

13. O cb1 é executado e adiciona o console.log('cb1') à call stack.

![](https://miro.medium.com/max/1400/1*hpyVeL1zsaeHaqS7mU4Qfw.png)

14. console.log('cb1') é executado.

![](https://miro.medium.com/max/1400/1*lvOtCg75ObmUTOxIS6anEQ.png)

15. O console.log('cb1') é removido da pilha de chamadas.

![](https://miro.medium.com/max/1400/1*Jyyot22aRkKMF3LN1bgE-w.png)

16. O cb1 é removido da call stack.

![](https://miro.medium.com/max/1400/1*t2Btfb_tBbBxTvyVgKX0Qg.png)

Em resumo temos duas "filas"

- call stack 
- callback queue

E temos o event loop, que é responsavél por pegar os callbacks que estão na
callback queue, e enviar para a call stack.

Existe também a sessão APIs da WEB onde nela são gerenciados os temporizadores,
quando os temporizadores são concluídos, ficam prontos, os callbacks são adicionados
na callback queue, que por sua vez são, enviados a call stack em sequencia pelo event loop
