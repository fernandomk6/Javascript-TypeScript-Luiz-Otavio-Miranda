class People {
  // constructor e say hello, são propriedades do prototype de People
  constructor(name) {
    this.name = name;
    return 'Função construtora de pessoas';
  }

  sayHello(){
    return 'Hello'
  }
}

function Dog(name) {
  // constructor é uma propriedade do prototype de Dog
  this.name = name;
  return 'Função construtoras de animais';
}

const fernando = new People('Fernando');
console.log(fernando.__proto__ == People.prototype); // true
console.log(fernando.__proto__ == People.__proto__); // false
console.log(fernando.prototype == People.__proto__); // false
console.log(fernando.prototype == People.prototype); // false

/**
 * Continuar dessa analise de true
 */