// Escreva uma função que recebe 2 numeros e retorna o maior deles
const getBigger = (...numbers) => 
  numbers.every(number => Number(number)) ? Math.max(...numbers) : undefined;

console.log(getBigger(100, 20, 1000));
console.log(getBigger(NaN, 20));
console.log(getBigger(Infinity, 20));
