# Promise

É um objeto que representa o sucesso ou a falha de uma operação assíncrona.

## O que é uma operação assíncrona?

Código assícrono, pode iniciar um processo agora, e finaliza-lo, posteriormente.

## Criando uma promise

Na Grande maioria das vezes você irá usar uma promise ja construida por alguem,
ou por alguma biblioteca.

### Instanciando

Para criar suas proprias promises, o construtor `Promise` deve ser usado.

`const myPromise = new Promise(param)`

### Parametro

O construtor promise, receberá como argumento uma função de callback.
Essa função de callback recebe 2 argumentos, resolve e reject.

Resolve e reject são funções que podem ser chamadas dentro do bloco da função
que esta sendo passada como argumento para o construtor promise.
Resolve deve ser usada quando a nossa operação assíncrona for bem sucedida.
Reject deve ser usado quando a nossa operação assíncrona falhar.

## Método then

É responsavél por receber a resposta de sucesso da promise.
O método then recebe como argumento uma função. Essa função recebe como argumento
o argumento que foi passado para a função resolve, no momento da instanciação
do objeto promise.

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

- Criamos uma promise que envolve uma função.
- Configuramos uma resposta para quando a resolução da promise for bem sucedida.
- Através do resolve, passamos um parametro para a função de callback do then.

## Encadeando then

O segundo  then, recebe uma função de callback como argumento, essa função
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

## status pending

Status inicial da promise, indica que essa promise nem foi concluída com sucesso, e nem
falho. É apenas o estado inicial dela.

## Praticando com request real

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
