const numbers = [0, 1, 2, 3];
const numbersStringifyed = numbers.map((number, index, numbers) => {
  return number.toString();
});

console.log(numbersStringifyed);
