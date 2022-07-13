# Async await

O que aprenderemos

- O que a palavra chave async faz
- O que a palavra chave await faz
- Como tratar erros em funções async
- O que são requests pararalelos e sequênciais
- Como refatorar requests paralelos

## A ideia principal por trás do async await

A proposta das funções async await é de simplificar o uso de forma síncrona 
das Promises e executar alguns procedimentos em um grupo de Promises. Assim 
como Promises são similares a callbacks estruturados, funções async/await 
são similares à junção de generators com Promises.

Funções async são uma forma de retornar promises.
Funcões async podem executar codigos assíncronos, de forma sincrona, usando o await.

## Async

A palavra async é usanda antes da declaração de uma função. Ela é usada
para indicar que essa função é uma função assíncrona.

A função declarada com a palavra chave async, sempre irá retornar uma promise.
Se a função async retorna um valor, a promise será resolvida com esse valor.

Se a função lança um erro, a promise é rejeitada.

```javascript
async () => {
  return 'oi';
}

// É aquivalente à

() => {
  return new Promise(resolve => {
    resolve('oi');
  });
}

// Tratando erros

const asyncFunc = async () => {
  throw new Error('Error');
}; // Promise(<rejected>)

asyncFunc()
  .catch(error => console.log(error.message)); // Error
```

## Tratando erros

Por padrão o valor de retorno de uma função async é uma promise que será resolvida,
com o valor de retorno. Ou seja, sempre irá retornar uma promise resolvida.

Como saberemos se a promise foi rejeitada?
Como retornar uma promse rejeitada usando async?

Dentro de uma função async, se quisermos retornar uma promise rejeitada o que fazemos
é lançar um erro. Se uma função async retorna um erro a promise vai ter o status
rejected e o valor do erro.

```javascript
const asyncFunc = async () => {
  throw new Error('Um erro genérico');
  return 'Deu certo';
};

asyncFunc()
  .then(response => console.log('then', response))
  .catch(error => console.log('catch', error.message));

// catch Um erro genérico
```

Perceba que a função async retornou uma promise rejeitada com o valor de Error.
Como a função estava com o status rejected, podemos tratar esse erro, usando o 
método catch.

Caso a função não lançase um erro, seria retornado uma promisse resolvida com o valor
de retorno da função. Logo o método catch não seria executado, apenas o then seria
executado.
