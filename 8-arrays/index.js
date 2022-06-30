// Retorne a soma do dobro de todos os pares
const numeros = [1, 2, 3, 4, 5];

const resultado = numeros
  .filter((numero) => numero % 2 === 0)
  .map(numero => numero * 2)
  .reduce((acumulador, numero) => acumulador + numero);

console.log(resultado);
