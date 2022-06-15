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

console.log(Object.getPrototypeOf(bob) === Child.prototype);
console.log(Object.getPrototypeOf(Child.prototype) === Father.prototype);
console.log(Object.getPrototypeOf(Father.prototype) === Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype) === null);

console.log(Object.getPrototypeOf(Child) === Father);
console.log(Object.getPrototypeOf(Father) === Function.prototype);
console.log(Object.getPrototypeOf(Function.prototype) === Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype) === null);

console.log(Object.getPrototypeOf(Function) === Function.prototype);
console.log(Object.getPrototypeOf(Function.prototype) === Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype) === null);

// Entender bem isso aqui primeiro
console.log(Child === Child.prototype);
console.log(Child);
console.log(Child.prototype);

console.log('---');

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
// Objectos não tem prototype
// Apenas funções possuem prototypes

console.log(typeof Bar); // function
console.log(typeof Bar.prototype); // object
console.log(Bar.prototype); // Existe. prototype é sempre um objeto
console.log(Bar.prototype.prototype); // Não existe. objeto não tem prototype




