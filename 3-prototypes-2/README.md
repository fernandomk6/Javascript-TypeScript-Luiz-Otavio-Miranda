# Mais sobre Prototypes

## Entendendo a diferença entre, construtores e objetos

Veja o Codigo Abaixo

```javascript
// class declaration
class People {
  constructor(name) {
    this.name = name;
  }
}

// function declaration
function Animal(name) {
  this.name = name;
}

console.log(typeof People); // function
console.log(typeof Animal); // function
```

Perceba que tanto People quanto Animal, possuem o tipo função  
Por que isso acontece?  
Em javascript como sabemos, não existem classes  
Então essa class People 'por baixo dos panos' é lida da seguinte forma  

```javascript
function People(name){
  this.name = name;
}

console.log(typeof People) // function;
```

Agora isso faz mais sentido. A classe é na verdade, a função construtora.  
Toda função construtora retorna um objeto

Neste exemplo perceba que uma função construtora pode retornar um objeto,  
ou pode apenas retornar um valor 'normal', como uma simples chamada
da função

```javascript
function Dog(name) {
  this.name = name;
  return 'Função construtora de Animais';
}

console.log(Dog('Freddie Mercury')); // Função construtora de Animais
console.log(typeof Dog('Freddie Mercury')); // string
console.log(new Dog('Freddie Mercury')); // {name: Freddie Mercury}
console.log(typeof new Dog('Freddie Mercury')); // object
```

Perceba que, a mesma função tem 2 retornos possiveis, um objeto, quando  
usado o new antes da chamada, ou ela simplesmente retornará 'olá', quando  
chamada sem o new  

É basicamente isso que acontece com os objetos globais do javascript  
Eles pode ser instanciados, e pode ser apenas 'Executados'
Exemplo

```javascript
const str = new String(); // retorna uma string vazia
const strConverted = String(1); // converte o parametro 1, para '1' e o retorna
```

- Quando utilizado o new. A função é chamada como um construtor
- Quando NÃO utilizado o new, a função é chamada "Normalmente"

---

## `__proto__` VS prototype

- Prototype
  - Prototype é uma propriedade de um objeto Function  
  - É o protótipo de objetos construídos por essa função
  - É algo **específico para funções** (inicialmente definido em Function, ie,  
  Function.prototypee então prototipicamente herdado por funções recém-criadas,  
  e então novamente essas funções o entregam a seus filhos, formando uma  
  cadeia de herança prototípica)
  - prototypeé um objeto criado automaticamente como uma propriedade especial  
  de uma função , que é usada para armazenar as propriedades (incluindo métodos)  
  de um objeto de função
  - Protótipo é uma propriedade de uma Função. É o modelo para criar objetos  
  usando essa função (construtora) com nova palavra-chave
- `__proto__`
  - É uma propriedade interna de um objeto, apontando para seu protótipo
  - As instâncias, têm `__proto__`
  - `__proto__` uma referência funciona em cada objeto para se referir à sua  
  `[[Prototype]]` propriedade
  - `__proto__` é a referência à propriedade function.prototype da função

Veja o Exemplo abaixo

```javascript
function Person(name){
    this.name = name
 }; 

const eve = new Person("Eve");

eve.__proto__ == Person.prototype //true

eve.prototype  //undefined

// As instâncias, têm __proto__
// As classes / funções construtoras, têm prototype
```

A `__proto__` propriedade de um objeto é uma propriedade que mapeia para a  
prototype função construtora do objeto. Em outras palavras

```javascript
instance.__proto__ === constructor.prototype // true
```

Quando usamos o new operador com um construtor para criar um novo objeto,  
a `__proto__` propriedade do novo objeto será definida com a prototype  
propriedade do construtor, então o construtor será chamado pelo novo objeto,  
nesse processo "this" será uma referência ao novo objeto no escopo do  
construtor, finalmente retorne o novo objeto

JavaScript usa uma função pai prototypepara definir suas funções filhas  
`[[prototype]]` quando essa função pai é executada new(lembre-se que dissemos  
que todos os objetos têm `[[prototype]]`? bem, funções também são objetos,  
então eles também têm `[[prototype]]`). Então, quando o `[[prototype]]` de uma  
função (filho) é definido como o prototypede outra função (pai), você terá  
isso no final

```javascript
let child = new Parent();
child.__proto__ === Parent.prototype // -- true.
```

*Lembre-se child.`[[prototype]]` é inacessível, então verificamos usando  
`__proto__`*

child é inacessivel pois o javascript não permite que a instancia altere  
diretamente o seu prototype, isso não faz muito sentido. Por isso `__proto__`  
funciona como um getter e setter para o prototipo.

O prototipo deve ser alterado diretametne e não por suas instancias,  
por isso existe a propriedade `__proto__`

As coisas são muito simples. A propriedade prototype é um exemplo de como  
algo deve ser construído. Então

- Eu sou um function e construo novos objetos semelhantes ao meu prototype
- Eu sou um object e fui construído usando o meu __proto__como exemplo

```javascript
let bar = new Foo();

// `bar` é construído de como Foo sabe construir objetos
bar.__proto__ === Foo.prototype // = true

// bar é uma instância - não sabe como criar objetos
bar.prototype // = undefined
```

Uma alternativa ao `__proto__` é o metodo estatico de Object, getPrototypeOf

```javascript
let x = new String("testing")

Object.getPrototypeOf(x) === x.__proto__; // true
```

---

## Metodo e propriedade Estaticos

Metodo estaticos são metodo que um objeto function, ou class pode ter,  
e esses metodos podem ser executados diretamente pelo objeto function  
ou class, sem precisar da instancia de um objeto  

Usando sintaxe de função

```javascript
function Foo() {
  
}

Foo.staticMethod = function() {
  console.log('Metodo estatico executado');
}

Foo.staticMethod(); // Metodo estatico executado
```

Não foi necessario estaciar um objeto para executar o staticMethod  

Usando sintaxe de class

```javascript
class Foo {
  constructor() {

  }

  static anotherStaticMethod() {
    console.log('Outro metodo estatico executado');
  }
}

// forma tradicional de declarar metodo static
Foo.staticMethod = function(){
  console.log('Metodo estatico executado');
}

// utilizando a palavra chave na class
Foo.anotherStaticMethod(); // Outro metodo estatico executado

Foo.staticMethod(); // Metodo estatico executado
```

Isso faz a mesma coisa do exemplo acima. Porem agora usando  
a palavra chave static

Perceba que o javascript utiliza varios metodos estaticos, como por exemplo  
`Object.create()`

**Os objetos instanciados apartir de Foo, herdarão o staticMethod?**  

A resposta é

**Não!**  

Os Metodos estaticos pertencem apenas a função / class, e não são passada para  
as suas instancias

---

## Metodos e propriedades estaticos

Metodos estaticos são colocados diretamente no objeto construtor function  
Metodo estatico não são herdado pelas instancias

```javascript
// sintaxe de class
class Proto1 {
  constructor() {
    this.proto1 = true; // será propriedade do proprio objeto instanciado
  }

  noStatic = 'notStatic'; // será herdado do prototype pai 

  static isStatic = 'isStatic'; // estatico, não será herdado
}

Proto1.sayHello = 'hello'; // estatico, não será herdado

// sintaxe de function
function Proto1() {
  this.proto1 = true; // será propriedade do proprio objeto instanciado
}

Proto1.prototype.foo = 'foo'; // será herdado do prototype pai 

Proto1.sayHello = 'hello'; // estatico, não será herdado
```

```javascript
function Foo() {
  this.child = 'propriedade do proprio objeto instanciado';
};

Foo.prototype.father = 'propriedade herdada do prototype do constructor';
Foo.isStatic = true;

const bar = new Foo();

console.log(bar.child); // propriedade do proprio objeto instanciado
console.log(bar.father); // propriedade herdada do prototype do constructor
console.log(bar.isStatic); // undefined
console.log(Foo.isStatic); // true

class Bar {
  constructor() {
    this.child = 'propriedade do proprio objeto instanciado';
  }
  father = 'propriedade herdada do prototype do constructor';
}

Bar.isStatic = true;

const foo = new Bar();

console.log(foo.child); // propriedade do proprio objeto instanciado
console.log(foo.father); // propriedade herdada do prototype do constructor
console.log(foo.isStatic); // undefined
console.log(Bar.isStatic); // true
```

## Extends

O extends é uma chamada de uma função construtora  
É quando o prototype de alguma função, é outra função

O extends retorna um objeto, e esse objeto sera

```javascript
// sintaxe de class
class Father {
  constructor(fatherName) {
    this.fatherName = fatherName;
  }
  static staticPropFather = true;
  haveFather = true;
};

class Child extends Father {
  constructor(childName, fatherName) {
    super(fatherName);
    this.childName = childName;
  }
  static staticPropChild = true;
  isChild = true;
};

const bob = new Child('bob', 'moacir');

console.log(bob.fatherName, bob.childName); // moacir bob
console.log(bob.haveFather, bob.isChild); // true true

console.log(Father.prototype.isPrototypeOf(bob)); // true
console.log(Child.prototype.isPrototypeOf(bob)); // true
```

```javascript
// function sintaxe
function Father(fatherName) {
  this.fatherName = fatherName;
};

Father.prototype.haveFather = true;
Father.staticPropFather = true;

function Child(childName) {
  this.childName = childName;
};

Child.staticPropChild = true;

// setando o extends
Child.prototype = new Father('moacir'); // semelhante ao super()
Child.prototype.isChild = true;

const bob = new Child('bob', 'moacir');

console.log(bob.fatherName, bob.childName); // moacir bob
console.log(bob.haveFather, bob.isChild); // true true

console.log(Father.prototype.isPrototypeOf(bob)); // true
console.log(Child.prototype.isPrototypeOf(bob)); // true

console.log(Object.getPrototypeOf(bob) === Father.prototype); // false
console.log(Object.getPrototypeOf(bob) === Child.prototype); // true

// true
console.log(Object.getPrototypeOf(Child.prototype) === Father.prototype);
```

## Anotações Gerais e Rascunhos

```javascript
class Father {
  constructor() {
  }
}

class Child extends Father {
  constructor() {
    super()
  }
}

class Foo {
  constructor() {
  }
}

class Bar {
  constructor() {
  }
}

const bob = new Child();
const bar = new Bar();
const foo = new Foo();
```

Prototype de Function não tem name  
Function.prototype.name  
Function.prototype.construcotr.name retorna Function como string  

Todos os outros prototypes tem names?  
Se forem funções sim. Toda função tem a propriedade name que tem seu  
nome  
Se for objeto, verifique o prototype com .constructor.name  
Objetos não tem propriedade name por dafault  
obj é uma instancia de obj.constructor.name  
Function.prototype = uma função anonima  
prototypes podem ser funções????  
Sim. Isso é usado com o Extends  
Object.getPrototypeOf(Child) === Father // true  
Child Extends Father  
O fato de extender não executou o prototype de Father,  
Child não é uma instancia de Father  
Apenas as instancias herdam o prototype  
Como Child não é instancia de Father, o seu prototypo não é  
Father.prototype  
Quem é o prototype de Child?  
A Função FATHER  
O constructor é usado para instancias e retorna um objeto  
No extends, a propria função construtora é o prototype de Child  
e não o prototype da função construtora  
Porque prototype de Child tem name e prototype de Father não tem name ?  
name é propriedade de uma função  

Retorna Function, pois o nome da função construtora de deles é Function  
Pode se dizer então que abmos são instancias de Function  
console.log(Object.getPrototypeOf(Father).constructor.name);  
console.log(Object.getPrototypeOf(Child).constructor.name);

Object.getPrototypeOf(Child) - Father  
Father.constructor === Function  
Father.prototype === Father

O prototype de Function e uma função anomima  
console.log(typeof Function.prototype); // 'function'  
se é function tem um name  
no caso de Function.prototype, é uma função anonima  
console.log(Function.prototype.name == ''); // true

Por que isso aqui da true??  
console.log(Function.prototype === Object.getPrototypeOf(Function)); // true

A Função Function é uma instancia de Function?  
console.log(Function.prototype.isPrototypeOf(Function)); // True  
Why God???

A Function.prototype é uma funcção anonima  
então function.prototype.name retorna string vazia

Function.prototype é uma função vazia, todas as funções  
criadas herdam dela  
function x(){};  
console.log(Object.getPrototypeOf(x) === Function.prototype); // true

Function é uma função  
Então Function tbm erda propriedades de Function.prototype  
console.log(Object.getPrototypeOf(Function) === Function.prototype); // true

Quem é o prototype de Function.prototype?  
console.log(typeof Object.getPrototypeOf(Function.prototype)); // object  
Então usei o constructor.name para saber o nome da função construtora  
console.log(Object.getPrototypeOf(Function.prototype).constructor.name);  
Object  
console.log(Object.getPrototypeOf(Function.prototype) === Object.prototype);  
True  
console.log(Object.getPrototypeOf(Object.prototype) === null); // True  
Concluido prototype chain passando por um extends  
Poruqe isso não funciona  
O prototype é setado nas instancias  
Quando usado o extends, a classe que extende o father, não é sua instancia  
logo não possuira seu prototype  
E quem será seu prototype se não for, Father.prototype?  
Seu prototype será a função Father;  
console.log(Object.getPrototypeOf(Child) === Father.prototype); // False  
console.log(Object.getPrototypeOf(Child) === Father); // true

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

Objetos não tem prototype  
Objetos herdam um prototype  
Apenas funções possuem prototypes  
console.log(typeof Bar); // function  
console.log(typeof Bar.prototype); // object  
console.log(Object.getPrototypeOf(Bar) === Function.prototype)

Verificando a função construtora de alguem  
let alguem = {};  
Verifico o nome da função construtora usada para criar um objeto  
console.log(Object.getPrototypeOf(alguem).constructor.name); // Object  
Depois é so comparar com o prototype do constructor encontrado  
console.log(Object.getPrototypeOf(alguem) === Object.prototype); // true

Prototype sempre vai ser um Objeto  
typeof any.prototype // object or function  
Apenas funções tem um prototype  
Prototype é uma propriedade de uma função  
Apenas quem constroi tem prototype  
Apenas funções constroem  
Quem é instanciado não possui prototype  
O que é construido herda o prototype da função  
Apenas funções possuem prototype  
Objetos não tem prototype  
Objeto e função são as mesmas coisas  
Não  
Como assim objeto não tem prototipo? pelo que eu vi ele herda de alguem  
Todo objeto herda o prototype de seu constructor  
Verifique o construtor assim  
obj.constructor.name  
Assim você sabera de quem seu objeto herdou o prototype
