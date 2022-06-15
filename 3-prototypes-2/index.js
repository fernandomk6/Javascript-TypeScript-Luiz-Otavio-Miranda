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
// Se forem funções sim. Tota função tem a propriedade name que tem seu
// nome
// Se for objeto, verifique o prototype com .constructor.name
// Objetos não tem propriedade name por dafault

// Function.prototype = uma função anonima
// prototypes podem ser funções????
// Sim. Isso é usado com o Extends
// Object.getPrototypeOf(Child) === Father // true
// Child Extends Father
// O fato de Extender. não executou o prototype de Father,
// Apenas as criações herdam o prototype
// Como Child não é criada de Father, o seu prototypo não é
// Father.prototype
// Quem é o prototype de Child
// A Função FATHER
// O constructor é usado para instancias e retorna um objeto
// no Extends, a propria função construtora é o prototype de Child
// e não o prototype da função construtora

// Pq proto de Child tem name e proto de Father não tem name ??
// name é propriedade de uma função

// Retorna Function, pois o nome da função construtora de deles é Function
console.log(Object.getPrototypeOf(Father).constructor.name);
console.log(Object.getPrototypeOf(Child).constructor.name);

// Object.getPrototypeOf(Child) -> Father
// Father.constructor === Function
// Father.prototype === Father

// O prototype de Function e uma função anomima
console.log(typeof Function.prototype); // 'function'
// se é function tem um name
// no caso de Function.prototype, é uma função anonima
console.log(Function.prototype.name == ''); // true

// Por que isso aqui da true??
console.log(Function.prototype === Object.getPrototypeOf(Function)); // true

// A Função Function é uma instancia de Function?
console.log(Function.prototype.isPrototypeOf(Function)); // True
// Why God???

// A Function.prototype é uma funcção anonima
// então function.prototype.name retorna string vazia

// Function.prototype é uma função vazia, todas as funções
// criadas herdam dela
function x(){};
console.log(Object.getPrototypeOf(x) === Function.prototype); // true

// Function é uma função
// Então Function tbm erda propriedades de Function.prototype
console.log(Object.getPrototypeOf(Function) === Function.prototype); // true

// Quem é o prototype de Function.prototype?
console.log(typeof Object.getPrototypeOf(Function.prototype)); // object então 
// usei o constructor.name para saber o nome da função construtora

console.log(Object.getPrototypeOf(Function.prototype).constructor.name);
 // Object


console.log(Object.getPrototypeOf(Function.prototype) === Object.prototype);
// True

console.log(Object.getPrototypeOf(Object.prototype) === null); // True
// Concluido prototype chain passando por um extends

// pq isso não funciona
// O prototype é setado nas instancias
// Quando usado o extends, a classe que extende o father, não é sua instancia
// logo não possuira seu prototype
// e quem será seu prototype se não for, Father.prototype?
// Seu prototype será a função Father;
console.log(Object.getPrototypeOf(Child) === Father.prototype); // False
console.log(Object.getPrototypeOf(Child) === Father); // true

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