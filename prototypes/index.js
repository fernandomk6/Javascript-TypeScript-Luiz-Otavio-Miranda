function People(name, age) {
  this.name = name;
  this.age = age;
}

const fernando = new People('Fernando', 23);
console.log(fernando instanceof People); // true

class Animal {
  constructor(name){
    this.name = name;
  }
}

const dog = new Animal('Fredie Mercury');
console.log(dog instanceof Animal); // true
console.log(Animal instanceof Object); // true
console.log(Animal instanceof Object.constructor) // true

// retorna um objeto com uma propriedade constructor. Esse objeto é a classe.
console.log(Object.getPrototypeOf(fernando)); 
// retorna um objeto com uma propriedade constructor. Esse objeto é a classe.
console.log(Object.getPrototypeOf(dog)); 

console.log(Object.getPrototypeOf(fernando).constructor);// Function People
console.log(Object.getPrototypeOf(dog).constructor); // class Animal

/**
 * Instancias vão verificar o construtor
 * Instancia do construtor e não do objeto literal
 */

class myClass {
  constructor(param){
    this.prop = param;
  }
}

console.log(typeof myClass);

function MyClass2 (param) {
  this.prop = param;
}

console.log(typeof MyClass2);
