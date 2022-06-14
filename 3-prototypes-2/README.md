# Mais sobre Prototypes
## Entendendo a diferença entre, construtores e objetos
Veja o Codigo Abaixo:
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
Perceba que tanto People quanto Animal, possuem o tipo função.  
Por que isso acontece?  
Em javascript como sabemos, não existem classes  
Então essa class People 'por baixo dos panos' é lida da seguinte forma:  
```javascript
function People(name){
  this.name = name;
}

console.log(typeof People) // function;
```
Agora isso faz mais sentido. A classe é na verdade, a função construtora. 

**Toda função construtora retorna um objeto**  

Neste exemplo perceba que uma função construtora pode retornar um objeto,  
ou pode apenas retornar um valor 'normal', como uma simples chamada  
da função.
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
chamada sem o new.  

É basicamente isso que acontece com os objetos globais do javascript.  
Eles pode ser instanciados, e pode ser apenas 'Executados';
Exmeplo:
```javascript
const str = new String(); // retorna uma string vazia
const strConverted = String(1); // converte o parametro 1, para '1' e o retorna
```

**Quando utilizado o new. A função é chamada como um construtor**  
**Quando NÃO utilizado o new, a função é chamada 'Normalmente'**  

## instanceof
O operador instanceof testa se um objeto tem, em seu prototype, a função  
construtora.

**Parâmetros**
- objeto
  *O objeto a ser testado*
- construtor
  *Função construtora a ser verificada*