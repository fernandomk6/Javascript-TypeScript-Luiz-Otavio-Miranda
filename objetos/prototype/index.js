const prot = {
  sayHello() {
    console.log('hello');
  }
};

const obj = Object.create(prot, {name: {
  value: 'teste',
  enumerable: true
}});

console.log(obj);
obj.sayHello();
