/**
 * break e continue são palavras chaves usando dentro de estruturas de
 * repetição, break e continue funcionam em todas as estruturas de repetição
 * 
 * as estruturas de repetição são:
 * 
 * - for
 * - for in
 * - for of
 * - while
 * - do white
 * 
 * continue: usado para pular para a proxima iteração
 * break: usado para interromper a estrutura de repetição
 */

const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let myNumber = null;

// for (let index = 0; index < arrayOfNumbers.length; index++) {
//   if (index == 0) {
//     continue;
//   }

//   if (index == 5) {
//     break;
//   }

//   console.log(arrayOfNumbers[index]);
// }

// for (let number of arrayOfNumbers) {
//   if (number == 1) {
//     console.log(`pulei o numero ${number}`);
//     continue;
//   }

//   if (number == 5) {
//     console.log('interrompendo...');
//     break;
//   }
//   console.log(number);
// }

// for (let index in arrayOfNumbers) {
//   if (index == 1) {
//     console.log(`pulei o index ${index}`);
//     continue;
//   }

//   if (index == 5) {
//     console.log('interrompendo...');
//     break;
//   }
//   console.log(arrayOfNumbers[index] + ' esse é o numero');
// }

// while (myNumber !== 7) {
//   myNumber = Math.round(Math.random() * 10);

//   if (myNumber == 1) {
//     console.log(`pulei o numero ${myNumber}`);
//     continue;
//   }

//   if (myNumber == 5) {
//     console.log(`cheguei no ${myNumber} irei parar`);
//     break;
//   }

//   console.log(myNumber);
// }

// do {
//   myNumber = Math.round(Math.random() * 10);

//   if (myNumber == 1) {
//     console.log(`pulei o numero ${myNumber}`);
//     continue;
//   }

//   if (myNumber == 5) {
//     console.log(`cheguei no ${myNumber} irei parar`);
//     break;
//   }

//   console.log(myNumber);
// } while (myNumber !== 7);
