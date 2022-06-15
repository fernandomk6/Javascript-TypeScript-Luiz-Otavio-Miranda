function Foo() {

};

const bar = new Foo();

console.log(Object.getPrototypeOf(bar) === Foo.prototype);
console.log(Object.getPrototypeOf(Foo) === Function.prototype);
console.log(Object.getPrototypeOf(Function) === Function.prototype);
console.log(Object.getPrototypeOf(Function.prototype) === Function.prototype);