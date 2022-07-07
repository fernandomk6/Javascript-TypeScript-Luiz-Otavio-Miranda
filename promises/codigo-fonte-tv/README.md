# Promises

[Desvendando DEFINITIVAMENTE as Promises em JavaScript](https://www.youtube.com/watch?v=nRJhc6vXyK4&t=225s)

O código abaixo representa basicamente o contexto de uma promise, porem com funções normais
e de forma síncrona

```javascript
function sumNumbers(successCalback, errorCallback) {
  let result = 1 + 1;

  if (result == 2) {
    successCalback(result);
  } else {
    errorCallback('Algum erro ocorreu aqui');
  }
}

sumNumbers(result => {
  console.log(`O resultado foi ${result}`);
}, error => {
  console.log(`Deu error ${error}`);
});
```

O mesmo código escrito usando promises

```javascript
const myPromise = new Promise((resolved, rejected) => {
  let result = 1 + 2;

  if (result == 2) {
    resolved(`O resultado foi ${result}`);
  } else {
    rejected(`Deu erro o resultado foi ${result}`);
  }
});

myPromise
  .then(onResolved => { 
    console.log(onResolved)
  }, onRejected => { 
    console.log(onRejected)
  });
```

Outro exemplo de funções tradicionais sincronas que podem ser transformadas em promises

```javascript
const betterDeveloper = 'Gil do carnaúbal';

function whoIsBetterCallback(successCallback, errorCallback) {
  if (betterDeveloper !== 'vanessa' && betterDeveloper !== 'gabriel') {
    errorCallback({
      name: 'This is wrong',
      message: `${betterDeveloper}? really?`
    });
  } else {
    successCallback({
      name: betterDeveloper,
      message: `CDF's are the best!`
    });
  }
};

whoIsBetterCallback((response) => {
  console.log(`${response.name} yeah! ${response.message}`);
}, error => {
  console.log(`${error.name} :( ${error.message})`);
});
```

Transformando em promise fica assim

```javascript
const betterDeveloper = 'Gil do carnaubal';

const whoIsBetter = new Promise((resolve, reject) => {
  if (betterDeveloper !== 'vanessa' && betterDeveloper !== 'gabriel') {
    reject({
      name: betterDeveloper,
      message: `really?`
    });
  } else {
    resolve({
      name: betterDeveloper,
      message: `CDF's are the best!`
    });
  }
});

whoIsBetter
  .then(developer => {
    console.log(`${developer.name} is de best ${develoter.message}`);
  })
  .catch(errorDeveloper => {
    console.log(`${errorDeveloper.name}? ${errorDeveloper.message}`);
  });
```

## then

O método then chama o callback passado para o construtor Promise

