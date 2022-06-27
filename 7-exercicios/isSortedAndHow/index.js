function isSortedAndHow(arr) {
  const isAscending = arr.every((element, index, array) =>
    index ? element > array[index - 1] : true) && 'yes, ascending';

  const isDescending = arr.every((element, index, array) =>
    index ? element < array[index - 1] : true) && 'yes, descending';

  const invalid = 'no';

  return arr.length < 2 ? invalid : isAscending || isDescending || invalid;
}

console.log(isSortedAndHow([4, 5, 9]));
// 'yes, ascending'
console.log(isSortedAndHow([36, 22, 1, -1]));
// 'yes, descending'
console.log(isSortedAndHow([40, 22, 10, 11]));
// 'no'