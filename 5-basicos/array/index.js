// é recomendado que o array tenha apenas um tipo de dado
let arrayStrings = ['Fernando', 'Maria', 'João'];
let arrayNumbers = [1, 2, 3];
let arrayArrays = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 6, 10]
];
let arrayObj = [
  {id: 1, name: 'Fernando'},
  {id: 2, name: 'Francisco'},
  {id: 3, name: 'Torado'}
];
let noRecomended = [1, 'Fernando', {isRecomended: false}, [], true, null];

console.log(arrayStrings);

// O operador delete exclui uma propriedade de um objeto
// returna true quando conseguiu deletar

// o operador delete é empregado para excluir uma propriedade de um objeto. 
// Depois de excluir a propriedade real, essa propriedade não estará acessível 
// e retornará undefined

// usando em objeto exclui a propriedade
// usando em array exclui o conteudo do indice, e seta o como undefined
// mas não reordena o array, deixa um buraco

// pode ser usado em variaveis pois variaveis com let e const são
// propriedades do objeto global

// deletando itens do array
delete arrayStrings[0]; // remove o indice do array
console.log(arrayStrings[0]); // undefined
console.log(arrayStrings); // [ <1 empty item>, 'Maria', 'João' ]
console.log(arrayStrings.length); // 3

delete arrayStrings[2]; // basicamente seta undefined no indice do arrray
console.log(arrayStrings); // [ <1 empty item>, 'Maria', <1 empty item> ]
console.log(arrayStrings.length); // continua mostrando 3


// console.log(typeof arrayStrings); // Object
// // verificando se o dado é um array
// console.log(arrayStrings instanceof Array); // true
// console.log('array' instanceof Array); // false
// console.log(Object instanceof Array); // false

// // recordando o array
// // slice vai recortar o array e retornar um novo array com os indices
// // que estão dentro dos parametros
// // slice(1, 3);
// // vai retornar um novo array com os indices 1, 2
// // perceba que o indice 3 (ultimo indice) não é incluido
// // podemos usar tbm numeros negativos
// // slice (1, -1);
// // esse -1 é igual a (array.length - 1)
// // dado array length sendo 5, o resultado ficaria 4
// // ou seja o ultimo indice
// // -2, seria o segundo indice de tras para frente ou penultimo indice
// // perceba novamente que o ultimo indice não é includio
// // o array original não é alterado
// // slice retorna um novo array com o pedaço que foi cortado
// console.log(arrayStrings.slice(1, -1));
// console.log(arrayStrings);

// // adicionando ao ultimo indice do array
// // o novo length do array é retornado 4
// console.log(arrayStrings.push('Rogerio')); 

// // adicionando ao primeiro indice do array
// // o novo length do array é retornado 5
// console.log(arrayStrings.unshift('Ana')); 

// // array depois de adicionado tudo
// console.log(arrayStrings);

// // removendo o ultimo elemento do array e retornando o elemento removido
// // altera o array original
// console.log(arrayStrings.pop()); // retornou rogerio

// // removendo o primeiro elemento do array e retornando o elemento removido
// // altera o array original
// console.log(arrayStrings.shift()); // retornou ana

// // array depois de removido tudo
// console.log(arrayStrings);

// // cuidado ao adicionar ao array pelo indice
// arrayStrings[99] = 'Felas';
// console.log(arrayStrings.length); // 100
// console.log(arrayStrings); 
// // [ 'Fernando', 'Maria', 'João', <96 empty items>, 'Felas' ]
// // os indices entre o 99 e o array.length, foram criados como undefined