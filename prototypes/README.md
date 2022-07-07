# Prototypes

Cada objeto tem um link interno para um outro objeto chamado prototype.  
Esse objeto prototype também tem um atributo prototype, e assim por diante  
até o que o valor null seja encontrado como sendo o seu prototype.  
null que, por definição, não tem prototype, e age como um link final  
nesta cadeia de protótipos (prototype chain).

## instanceof

O operador instanceof testa se um objeto tem, em seu prototype, a  
função construtora

```javascript
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

// retorna um objeto com uma propriedade constructor.
console.log(Object.getPrototypeOf(fernando)); 
// retorna um objeto com uma propriedade constructor.
console.log(Object.getPrototypeOf(dog)); 

console.log(Object.getPrototypeOf(fernando).constructor);// Function People
console.log(Object.getPrototypeOf(dog).constructor); // class Animal

/**
 * Instancias vão verificar o construtor
 * Instancia do construtor e não do objeto literal
 */
```

## Class não Existe em Javacript!!

Class é uma Função construtora!
Veja:

```javascript
class MyClass = {
  constructor(param){
    this.prop = param;
  }
}

console.log(typeof MyClass); // function!! Que coisa não??
```

Class por baixo dos panos funciona exatamente como uma função construtora  
normal  
Veja:

```javascript
function MyClass (param) {
  this.prop = param;
}

console.log(typeof MyClass); // function!! Agora eu saquei!
```
