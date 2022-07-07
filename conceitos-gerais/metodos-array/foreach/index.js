const myArray = [1, true, {title: 'a title'}, [1,2,3], 'fernando'];

let = arrayNumbers = [];
myArray.forEach((item, index, array) => {

  if (typeof item === 'number') {
    arrayNumbers.push(item);
  }

  if (index === array.length - 1) {
    myArray = [...arrayNumbers];
  }
});

console.log(myArray);