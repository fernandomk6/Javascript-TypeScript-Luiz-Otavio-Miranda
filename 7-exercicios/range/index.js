function range(n1, n2, increment) {
  const first = n1;
  const last = n2;
  const step = increment || 1;
  let arrayRange = [];

  if (!last) {
    for (let value = 1; value <= first; value += step) {
      arrayRange.push(value);
    }
  } else {
    if (first <= last) {
      for (let value = first; value <= last; value += step) {
        arrayRange.push(value);
      }
    } else {
      for (let value = first; value >= last; value -= step) {
        arrayRange.push(value);
      }
    }
  }
  return arrayRange;
}

console.log(range(5));
console.log(range(6, 11));
console.log(range(10, 19, 2));
console.log(range(6, 2));
console.log(range(8, -3, 4));

// [ 1, 2, 3, 4, 5 ]
// [ 6, 7, 8, 9, 10, 11 ]
// [ 10, 12, 14, 16, 18 ]
// [ 6, 5, 4, 3, 2 ]
// [ 8, 4, 0 ]
