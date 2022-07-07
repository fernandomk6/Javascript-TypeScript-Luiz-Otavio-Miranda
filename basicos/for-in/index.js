const fruits = ['banana', 'maçã', 'jaguatirica'];
const person = {
  firstName: 'fernando',
  lastName: 'henrique',
  address: {
    street: 'mestre andre',
    number: 218
  }
};

// classic for
// for (let index = 0; index < fruits.length; index++) {
//   console.log(fruits[index]);
// }

// usando for in
for (let fruit in fruits) {
  // fruit é o nome da pripriedade
  // in faz referencia a uma propriedade de um elemento e não ao valor

  // como é um array a propriedade é o indice
  // inprime a propriedade

  console.log(fruit, fruits[fruit]);
}

for (let personData in person) {
  console.log(personData); // imprime a propriedade
  console.log(person[personData]); // inprime o valor da primeira propriedade

  // ... depois da segunda e assim em diante
}

