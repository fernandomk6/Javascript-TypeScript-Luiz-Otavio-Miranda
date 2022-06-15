// class Father {
//   constructor() {
//     this.father = true;
//   }
// }

// class Child extends Father {
//   constructor() {
//     super()
//     this.child = true;
//   }
// }

// const bob = new Child();

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

// // Entender bem isso aqui primeiro
// console.log(Child === Child.prototype);
// console.log(Child);
// console.log(Child.prototype);

// ---

class Father {
  constructor() {
    this.father = true;
  }
}

class Child{
  constructor() {
    this.child = true;
  }
}

// Lembre-se, prototype é sempre um objeto
console.log(typeof Child); // function
console.log(typeof Child.prototype); // object
console.log(Child.prototype); // não existe
console.log(Child.prototype.prototype); // não existe

// Objectos não tem prototype
// Apenas funções possuem prototypes
