# Diferenças entre valores primitivos e valores por referencia

#### Tipos de dados primitivos
- string
- number
- boolean
- undefined
- null
- bigint
- symbol

> Os primitivos são **imultaveis**

```javascript
let name = 'fernando';
name = 'toras?';

// nesse caso não houve alteração do valor, e sim a sua substituição,
// o valor 'fernando' não foi alterado, ele foi substituido por 'toras?'
```

```javascript
let name = 'Fernando';
name[0] = 'R';
console.log(name); // Fernando

// perceba que o valor não foi alterado

// Isso é possivel com array, pois array é um objeto e objeto não é um
// dado primitivo, imutavel.
```

> Quando falamos de dado, falamos de valor e não da variavel (referencia)

```javascript
let a = 'a';
let b = a; // copia pois a é dado primitivo
console.log(a, b); // a a

// perceba que a atribuição retornou o valor da variavel e não sua referencia
// isso acontece apenas com dados primitivos
// se vc tentar fazer isso com objeto, você terá um resultado não esperado

let a = {a: 'a'};
let b = a; // atribuindo a referencia pois não é dado primitivo
b.b = 'b';
console.log(a, b); // { a: 'a', b: 'b' } { a: 'a', b: 'b' }

// perceba que alteramos apenas o objeto b, e a sua alteração também aconteceu
// no objeto a
// isso acontece porque b é uma referencia de a e não uma copia de seu valor.
// muito cuidado quando atribuir uma variavel que guarda um objeto,
// você estara atribuindo a sua referencia e não o seu valor
```

> Objetos podem ser passados por referencias, arrays e functions também pois
são objetos

