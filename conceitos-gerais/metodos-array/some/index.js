const arrayOfNumbers = [0, 1, 2, 3, 'toras?'];
const haveString = arrayOfNumbers.some((number, index, arrayOfNumbers) => {
  return typeof number === 'string' ? true : false;
});

console.log(haveString);