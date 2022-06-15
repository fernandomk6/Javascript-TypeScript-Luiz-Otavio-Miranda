class Father {
  constructor() {
    this.father = true;
  }
}

class Child extends Father {
  constructor() {
    super()
    this.child = true;
  }
}

const bob = new Child();

// Prototype de function não tem name
// Function.prototype.name 
// Function.prototype.construcotr.name retorna Function como string

// Todos os outros prototypes tem names?
// Toda declaração de função tem uma propriedade name
// Objetos não tem propriedade name por dafault

// Function.prototype = uma função anonima
// prototypes podem ser funções????

// Pq proto de Child tem name e proto de Father não tem name ??
console.log(Object.getPrototypeOf(Father).constructor.name);
console.log(Object.getPrototypeOf(Child).constructor.name);

// Object.getPrototypeOf(Child) -> Father
// Father.constructor === Function
// Father.prototype === Father

// pq isso não funciona
console.log(Object.getPrototypeOf(Child) === Father.prototype); // False

// console.log(Object.getPrototypeOf(bob) === Child.prototype);
// console.log(Object.getPrototypeOf(Child.prototype) === Father.prototype);
// console.log(Object.getPrototypeOf(Father.prototype) === Object.prototype);
// console.log(Object.getPrototypeOf(Object.prototype) === null);

// console.log(Object.getPrototypeOf(Child) === Father);
// console.log(Object.getPrototypeOf(Father) === Function.prototype);
// console.log(Object.getPrototypeOf(Function.prototype) === Object.prototype);
// console.log(Object.getPrototypeOf(Object.prototype) === null);

// console.log(Object.getPrototypeOf(Function) === Function.prototype);
// console.log(Object.getPrototypeOf(Function.prototype) === Object.prototype);
// console.log(Object.getPrototypeOf(Object.prototype) === null);

class Foo {
  constructor() {
    this.foo = true;
  }
}

class Bar {
  constructor() {
    this.bar = true;
  }
}

const bar = new Bar();
const foo = new Foo();

// Lembre-se, prototype é sempre um objeto
// Objetos não tem prototype
// Objetos therdam um prototype (.__proto__ ou Object.getPrototypeOf(Object))
// Apenas funções possuem prototypes


// console.log(typeof Bar); // function
// console.log(typeof Bar.prototype); // object
// console.log(Object.getPrototypeOf(Bar) === Function.prototype);

// verificando a função construtora de alguem
// let alguem = {};

// verifico o nome da função construtora usada para criar um objeto
// console.log(Object.getPrototypeOf(alguem).constructor.name); // Object

// depois é so comparar com o prototype do constructor encontrado
// console.log(Object.getPrototypeOf(alguem) === Object.prototype); // true


// prototype sempre vai ser um Objeto

// typeof any.prototype

// criador -> constructor que cria um objeto
// criado -> instancia é o objeto criado pelo constructor

// apenas o criador possui um prototipo (modelo a ser seguido) pois eu sou 
// criador, preciso de um modelo para minhas crias

// o que é criado não tem um prototipo
// ele tem um link ao prototipo, mas não pode alterar o prototipo do qual
// ele foi criado

// apenas funções tem um prototype
// prototype é uma propriedade de uma função
// apenas quem constroi tem prototype
// apenas funções constroem
// quem recebe não possui prototype

// typeof any // function

// O que é construido herda o prototypo da função

// apenas funções possuem prototype
// objeto não tem prototype

// objeto e função são as mesmas coisas
// não

// como assim objeto não tem prototipo? pelo que eu vi ele herda de alguem