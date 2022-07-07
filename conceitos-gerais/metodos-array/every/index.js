const arrayOfNames = ['fernando', 'pedro', 'julia', 0];
console.log(arrayOfNames.every((name, index, arrayOfNames) => {
  return typeof name === 'string' ? true : false;
})); // false