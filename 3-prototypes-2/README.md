# Mais sobre Prototypes
## 1 - Entendendo a diferença entre, construtores e objetos

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

## 2 - `__proto__` VS prototype 

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
child.__proto__ === Parent.prototype // --> true.
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
bar.__proto__ === Foo.prototype // => true

// bar é uma instância - não sabe como criar objetos
bar.prototype // => undefined
```

Uma alternativa ao `__proto__` é o metodo estatico de Object, getPrototypeOf

```javascript
let x = new String("testing")

Object.getPrototypeOf(x) === x.__proto__; // true
```


