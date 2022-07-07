const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// perceba que estou pulando o segundo item
const [first,, third, fourth, ...othersNumbers] = numbers;

console.log(first, third, fourth, othersNumbers);

// segue a ordem dos indices

const matriz = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

const [ [n1, n2, n3], arr2, arr3] = matriz;
console.log(n1, n2, n3, arr2, arr3);

// desestruturei o array, dentro da desestruturação

const arrEmpty = [];
// setando um valor padrãp caso a propriedade não exista
const [empty = 'não existe'] = arrEmpty;
console.log(empty);
