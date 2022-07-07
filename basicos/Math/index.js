let numInteger = 10;
let numFloat = 0.59999999999;
let numIntegerNegative = -10;
let numFloatNegative = -0.59999999999;

let numStringInteger = '10';
let numStringFloat = '0.59999999999';
let numStringIntegerNegative = '-10';
let numStringFloatNegative = '-0.59999999999';

let stringLetters = 'Freddie Mercury';

// arredondando para o inteiro mais baixo
console.log('Arredondando com o floor');
console.log(Math.floor(numInteger)); // 10
console.log(Math.floor(numFloat)); // 0
console.log(Math.floor(numIntegerNegative)); // -10
console.log(Math.floor(numFloatNegative)); // -1

// perceba que as string nesse caso são transformadas em numbers,
// quando a sintaxe da string é como um numero
console.log(typeof Math.floor(numStringInteger)); // number
console.log(typeof Math.floor(numStringFloat)); // number 
console.log(typeof Math.floor(numStringIntegerNegative)); // number
console.log(typeof Math.floor(numStringFloatNegative)); // number

console.log(Math.floor(numStringInteger)); // 10
console.log(Math.floor(numStringFloat)); // 0 
console.log(Math.floor(numStringIntegerNegative)); // -10
console.log(Math.floor(numStringFloatNegative)); // -1

console.log(Math.floor(stringLetters)); // NaN operações matematicas com
// letras, retornarão um NaN

// Math.floor() arredonda para o numero inteiro mais baixo
// Math.ceil() arredonda para o numero inteiro mais alto


console.log('Arredondando com o ceil');
console.log(Math.ceil(numInteger)); // 10
console.log(Math.ceil(numFloat)); // 1
console.log(Math.ceil(numIntegerNegative)); // -10
console.log(Math.ceil(numFloatNegative)); // -0


console.log(typeof Math.ceil(numStringInteger)); // number
console.log(typeof Math.ceil(numStringFloat)); // number
console.log(typeof Math.ceil(numStringIntegerNegative)); // number
console.log(typeof Math.ceil(numStringFloatNegative)); // number

console.log(Math.ceil(numStringInteger)); // 10
console.log(Math.ceil(numStringFloat)); // -1
console.log(Math.ceil(numStringIntegerNegative)); // -10
console.log(Math.ceil(numStringFloatNegative)); // -0

console.log(Math.ceil(stringLetters)); // NaN operações matematicas com
// letras, retornarão um NaN


console.log('Arredondando com o round');
// o round vai arredondar para o inteiro mais proximo
// se o primeiro decimal for maior ou igual a 5, o numero é arredondado
// para cima, se for menor que 5 é arredondado para baixo

console.log(Math.round(numInteger)); 
console.log(Math.round(numFloat)); 
console.log(Math.round(numIntegerNegative));
console.log(Math.round(numFloatNegative)); 

console.log(Math.round(numStringInteger));
console.log(Math.round(numStringFloat));
console.log(Math.round(numStringIntegerNegative));
console.log(Math.round(numStringFloatNegative));

console.log(Math.round(stringLetters));

console.log(Math.round(1.9)); // 2
console.log(Math.round(1.5)); // 2
console.log(Math.round(1.4)); // 1

console.log(Math.round(1.19)); // 1
console.log(Math.round(1.119)); // 1
console.log(Math.round(1.1119)); // 1

console.log('Achando o maior numero com o Math.max()');
console.log(Math.max("olá", 1)); // NaN
console.log(Math.max(10, 3, 9, -0, 6, +0, Infinity, -Infinity)); // ifinity
console.log(Math.max(1, 2, 3)); // 3

console.log('Achando o menor numero com o Math.min()');
// Segue a mesma logica do max

console.log('Gerando numeros aleatorios entre 0 e 1 com o random');
// retonar um numero aleatorio entre 0 e 1
// o 1 não é incluido
console.log(Math.random());

console.log('Numeros aleatorios dentro de uma sequencia');
let max = 10;
let min = 8;
let random = Math.random() * (max - min) + min;
console.log(random);

// arredondando para o inteiro mais proximo
console.log(Math.round(random));

console.log('Divisões por 0 geram um infinity positivo ou negativo');
console.log(1 / 0); // infinity
console.log(-1 / 0) // -infinity
