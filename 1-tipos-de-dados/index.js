let myName = 'fernando';
let age = 45;
let moto = true;
let car = null;
let rich;
let obj = {};

console.log(typeof myName); // string
console.log(typeof age); // number
console.log(typeof moto); // boolean
console.log(typeof car); // object
console.log(typeof rich); // undefined
console.log(typeof obj); // object

class MyClass {
  constructor(name) {
    this.name = name;
  }
  get getName() {
    return this.name
  }
}

const myObject = new MyClass('Meu objeto');
console.log(myObject.name); // Meu objeto

console.log(myObject instanceof MyClass); // True
console.log(age instanceof Number); // False

/**
 * console.log(age instanceof Number);
 * 
 * Retorna false pois o instanceof verifica se o operando esquerdo é uma
 * instancia do operando da direita.
 * Nesse caso age é um number literal e não um objeto.
 * Valores literais não são objetos, logo não são instancias.
 * Todas instancia retorna um objeto.
 * A instancia é o 'PAI' do constructor que foi chamado.
 * Toda instancia tera o operador new. O new sempre invocará um metodo
 * construtor, e esse metodo construtor estará dentro de um scopo 'this'
 * esse this, será a 'classe' desse objeto retornado.
 * A classe é o mesmo prototype
 * 
 * classe de myObject é MyClass
 * prototype de myObject é o Objeto MyClass.
 * 
 * Que coisa não?!
 * 
 * -_-
 *  
 * */