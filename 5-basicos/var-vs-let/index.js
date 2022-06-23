// let possui escopo de bloco também
// var possui apenas escopo de funções
let myName = 'fernando';
var age = 1;

console.log(myName, age);

if (true) {
  let myName = 'outro nome'; // não alterou o outro escopo
  var age = 23; // alterou o age do escobo global
  console.log(myName, age);
}

console.log(myName, age);