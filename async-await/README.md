# Async Await

## Descrição

Quando uma função assíncrona é chamada, ela retorna uma Promise. Quando 
a função assíncrona retorna um valor, a Promise será resolvida com o valor
retornado. Quando a função assíncrona lança uma exceção ou algum valor, 
a Promise será rejeitada com o valor lançado.

Uma função assíncrona pode conter uma expressão await, que pausa a execução 
da função assíncrona e espera pela resolução da Promise passada, e depois 
retoma a execução da função assíncrona e retorna o valor resolvido.

As funções assíncronas podem conter zero ou mais await expressões. As expressões 
de await fazem com que as funções de retorno de promessa se comportem como se 
fossem síncronas, suspendendo a execução até que a promessa retornada seja 
cumprida ou rejeitada. O valor resolvido da promessa é tratado como o valor 
de retorno da expressão await. Uso de async permite o uso de blocos / await 
comuns em torno de código assíncrono.

Uma função assíncrona é uma função declarada com a palavra async chave 
e a await palavra-chave é permitida dentro dela. As palavras-chave async e 
await permitem que o comportamento assíncrono e baseado em promessas seja 
escrito em um estilo mais limpo, evitando a necessidade de configurar 
explicitamente as cadeias de promessas.

O corpo de uma função assíncrona pode ser pensado como sendo dividido por 
zero ou mais expressões de await. O código de nível superior, incluindo a 
primeira expressão await (se houver), é executado de forma síncrona. Dessa 
forma, uma função assíncrona sem uma expressão de await será executada de 
forma síncrona. Se houver uma expressão await dentro do corpo da função, no 
entanto, a função assíncrona sempre será concluída de forma assíncrona.

## Valor retornado

A Promise que será resolvido com o valor retornado pela função assíncrona, 
rejeitado com uma exceção lançada ou não capturado dentro da função assíncrona.

As funções assíncronas sempre retornam uma promessa. Se o valor de retorno de 
uma função assíncrona não for explicitamente uma promessa, ele será encapsulado 
implicitamente em uma promessa.

```javascript
async function foo() {
   return 1
}
```

É Similar à

```javascript
function foo() {
   return Promise.resolve(1)
}
```

Outro Exemplo

```javascript
async function foo() {
   await 1
}
```

Também é equivalente a:

```javascript
function foo() {
   return Promise.resolve(1).then(() => undefined)
}
```

## Await

O código após cada expressão await pode ser considerado como existente em um .then 
retorno de chamada. Desta forma, uma cadeia de promessas é progressivamente 
construída a cada passo reentrante através da função. O valor de retorno forma 
o elo final da cadeia.
