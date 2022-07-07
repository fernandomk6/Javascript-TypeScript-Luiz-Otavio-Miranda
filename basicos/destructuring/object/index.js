const person = {
  firstName: 'fernando',
  lastName: 'henrique',
  age: 23,
  address: {
    street: 'mestre andre',
    number: 218,
    district: 'conjunto ceara'
  }
};

// desestruturando o objeto address dentro da desestruturação também
// mas também peguei o objeto adress completo logo em seguida
const {firstName, lastName, age, address: {street, number, district}, address} = person;

// rest operator pegando todas as propriedades menos o primeiro nome
const {...personData} = person; 

// const {street, number: numberAddress, district: bairro = 'genibau'} = address;
// percebe que a propriedade number foi apelidada 
// district por padrão recebe genibau, caso o objeto não tenha essa propriedade

const message = 
  `${firstName} ${lastName} tem ${age} anos e mora na rua ${street} de numero ${number} e bairro ${district}`;
console.log(message);

