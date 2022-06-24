const numbers = [0, 1, 2, 3, 4];
const sumResult = numbers.reduce((acc, number) => {
  return number + acc;
}, 0);

console.log(sumResult);
