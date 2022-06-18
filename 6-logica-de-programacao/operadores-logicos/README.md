# Operadores logicos

Os operadores logicos são

- &&
- ||
- !

## && AND

Retorna um boolean.
Quando as duas expressões são truthy, true é retornado.
Caso contrario false é retornado.

## || OR

Rertona um boolean.
Quando uma das expressões é um truthy, true é retornado.
Caso contrario, false é retornado.

## ! NOT

Caso o operando da direita seja um falsy, true é retornado.
Caso o operando da direita seja um truthy, false é retornado.

### falsy

falsy é uma expressão ou dado que possa ser transformado em um false

```javascript
  console.log("Listar os 7 valores falsy")
  0 ? console.log("truthy") : console.log("falsy") // zero é falsy
  0n ? console.log("truthy") : console.log("falsy") // zero BigInt é falsy
  null ? console.log("truthy") : console.log("falsy") // nulo é falsy
  undefined ? console.log("truthy") : console.log("falsy") // indefinido é falsy
  false ? console.log("truthy") : console.log("falsy") // false é falsy
  NaN ? console.log("truthy") : console.log("falsy") // Not a Number é falsy
  "" ? console.log("truthy") : console.log("falsy")  // string vazia é falsy
```

- zero é falsy
- zero BigInt é falsy
- nulo é falsy
- indefinido é falsy
- false é falsy
- Not a Number é falsy
- string vazia é falsy

### truthy

truthy é uma expressão ou dado que possa ser transformado em true

```javascript
console.log("Alguns valores truthy")
true ? console.log("truthy") : console.log("falsy")  // true é truthy
({}) ? console.log("truthy") : console.log("falsy") // objeto vazio é truthy
([]) ? console.log("truthy") : console.log("falsy") // array vazio é truthy
1n ? console.log("truthy") : console.log("falsy") // 1n é truthy
17 ? console.log("truthy") : console.log("falsy") // número !== de 0 é truthy
new Date() ? console.log("truthy") : console.log("falsy") // objeto é truthy
3.4 ? console.log("truthy") : console.log("falsy") // número decimal é truthy
-99 ? console.log("truthy") : console.log("falsy") // número negativo é truthy
Infinity ? console.log("truthy") : console.log("falsy") // infinito positivo é truthy
-Infinity ? console.log("truthy") : console.log("falsy") // infinito negativo é truthy
"Rocketseat" ? console.log("truthy") : console.log("falsy") // String com valor é truthy
"🚀 💺" ? console.log("truthy") : console.log("falsy") // Mesmo exemplo de cima!
" " ? console.log("truthy") : console.log("falsy") // String com espaço em branco é truthy (cuidado)!
```

- true é truthy
- objeto vazio é truthy
- array vazio é truthy
- 1n é truthy
- número !== de 0 é truthy
- objeto é truthy
- número decimal é truthy
- número negativo é truthy
- infinito positivo é truthy
- infinito negativo é truthy
- String com valor é truthy
- String com espaço em branco é truthy **cuidado**

*The word TRUE is your perspective of something. The word TRUTH is universal and cannot be changed.*
