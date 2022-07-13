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

A função async tem o seu valor retornado de forma síncrona. O código assíncrono, de fato,
é sua promise de retorno, ou as promises manipuladas no bloco de função.

Faz com que um bloco de funções assíncronas se comportem como síncrono.

O retorno de uma função async é síncrono. O seu código executado não.

```javascript
const asyncFunc = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.co/api/users');
  return data;
};

const p = asyncFunc();

console.log(1);
console.log(p);
console.log(2);

// 0
// Promise { <pending> }
// 1
```

Perceba que os resultados foram síncronos, de acordo como está escrito no código.
Esse é o core das funções async. Perceba que o await tem papel fundamental
ao 'controlar' as promises, que são assíncronas.

O código abaixo se comporta de forma assíncrona no uso do método then.

```javascript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Resolveu');
  }, 2000);
});
console.log(1);
myPromise.then(result => console.log(result));
console.log(2);

// 1
// 2
// Resolveu
```

Perceba que assim o resultado foi diferente do escrito, pois o método then, foi executado
assíncronamente.

Um novo exemplo

```javascript
const asyncFunc = async () => {
  const data = await new Promise(resolve => {
    setTimeout(() => {
      resolve('Resolveu')
    }, 5000);
  });
  console.log(data);
  return data;
};

const p = asyncFunc();

console.log(1);
console.log(p);
console.log(2);

// 1
// Promise { <pending> }
// 2
// Resolveu
```

Perceba que no código acima, 1, Promise pending, e 2, foram retornado de forma síncrona,
ja o 'Resolveu', foi mostrado no console apenas depois de 2 segundos. Esse código serve
para mostrar que o retorno de uma função async ele é instantaneo mas o código que está sendo
executado nela está em outra thread. Tente visualizar como duas grandes pilhas de códigos, os
síncronos (códigos normais) e os assíncronos (async, promises, temorizadores).

A função declarada com a palavra chave async, sempre irá retornar uma promise.
Se a função async retorna um valor, a promise será resolvida com esse valor.

Se a função lança um erro, a promise de retorno possuí o status rejected e o valor do erro lançado.

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

## Await

É inserida dentro do bloco de uma função async.
Ela pausa a execução da função até que a promise seja resolvida, e 
retorna o valor da promise.

## Tratando erros

Por padrão o valor de retorno de uma função async é uma promise que será resolvida,
com o valor de retorno. Ou seja, sempre irá retornar uma promise.

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

## Requests paralelos e sequenciais

### Sequenciais

Request sequenciais é executamos mais de um request usando o await, sequencialmente.
O segundo request, so é feito, após o primeiro ser concluído. 

No exemplo abaixo, a segunda promise apenas será executada após a primeira ser 
resolvida. Isso são requests sequenciais.

```javascript
const get3Pokemons = async () => {
  const pokemon1 = await fetch('https://pokeapi.co/api/v2/pokemon/1');
  const data1 = await pokemon1.json();

  const pokemon4 = await fetch('https://pokeapi.co/api/v2/pokemon/4');
  const data4 = await pokemon4.json();

  const pokemon7 = await fetch('https://pokeapi.co/api/v2/pokemon/7');
  const data7 = await pokemon7.json();

  console.log(data1.name, data4.name, data7.name);
}

get3Pokemons(); 
```

### Paralelos

Os resquests paralelos são executados ao mesmo tempo. É aconselhavel usar
quando os requests não dependem um do outro. São caracterizados por não
usar o await antes da expressão que retorna uma promise. Ou seja, o javascript
não iria esperar aquela promise resolver.

No exemplo abaixo, a segunda promise não irá experar a primeira promise ser
resolvida, todos as promises estão sendo armazenada com o status pending. Para so
então depois, usarmos o await. Quando realmente for necessário obter o valor de resultado. 
Isso são requests paralelos.

```javascript
const get3Pokemons = async () => {
  const promisePokemon1 = fetch('https://pokeapi.co/api/v2/pokemon/1');
  const promisePokemon4 = fetch('https://pokeapi.co/api/v2/pokemon/4');
  const promisePokemon7 = fetch('https://pokeapi.co/api/v2/pokemon/7');

  const responsePokemon1 = await promisePokemon1;
  const responsePokemon4 = await promisePokemon4;
  const responsePokemon7 = await promisePokemon7;

  const dataPokemon1 = await responsePokemon1.json();
  const dataPokemon4 = await responsePokemon4.json();
  const dataPokemon7 = await responsePokemon7.json();

  console.log(dataPokemon1.name, dataPokemon4.name, dataPokemon7.name);
}

get3Pokemons();
```

O código acima pode ser simplificado

```javascript
const get3Pokemons = async () => {
  const promisePokemon1 = fetch('https://pokeapi.co/api/v2/pokemon/1');
  const promisePokemon4 = fetch('https://pokeapi.co/api/v2/pokemon/4');
  const promisePokemon7 = fetch('https://pokeapi.co/api/v2/pokemon/7');

  const responses = await Promise.all([promisePokemon1, promisePokemon4, promisePokemon7]);

  for (const response of responses) {
    const pokemon = await response.json();
    console.log(pokemon.name);
  }
  
}

get3Pokemons();
```

## Conclusão

O código abaixa serve para comparar todos os conceitos de promises tradicional
com o sintaxe sugar async await

As funções abaixo fazem as mesmas coisas

```javascript
// Uma promise qualquer
const myPromise = new Promise((resolve, reject) => {
  // reject('Rejeitada');
  resolve('Resolvida');
});

// Usando promises de forma tradicional
const normalFunction = () => {
  myPromise
  .then(result => {
    throw new Error('Erro lançado');
    console.log(result);
  })
  .catch(error => {
    console.log('normal', error.message);
  });
};
normalFunction();

// Usando promises com async await
const asyncFunction = async () => {
  try {
    const result = await myPromise;
    throw new Error('Erro lançado');
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
};
asyncFunction();
```