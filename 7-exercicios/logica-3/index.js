/**
 * Escreva uma função que recebe um número e retorne o seguinte
 * - Número é divisivel por 3 = Fizz
 * - Número é divisivel por 5 = Buzz
 * - Número é divisivel por 3 e 5 = FizzBuzz
 * - Número não é divisivel por 3 e 5 = retorna o proprio numero
 * 
 * Cheque se o numero é realmente um numero
 * Use a função com numeros de 0 a 100
 */

function isDivisibleBy5And3(number) {
  if (typeof number !== 'number') return number;
  
  const fizz = number % 3 === 0 ? 'Fizz' : false;
  const buzz = number % 5 === 0 ? 'Buzz' : false;
  const fizzBuzz = fizz && buzz ? 'FizzBuzz' : false;

  return fizzBuzz || fizz || buzz || number;
}

for (let number = 0; number <= 100; number++) {
  console.log(number, isDivisibleBy5And3(number));
}

console.log(isDivisibleBy5And3('fernando'));
