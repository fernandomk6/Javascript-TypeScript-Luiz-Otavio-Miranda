# Currying

Currying é o processo de transformar uma função que espera vários argumentos em 
uma função que espera um único argumento e retorna outra função curried. 

Por exemplo, uma função que recebe três argumentos, ao sofrer currying, resulta 
em uma função que recebe um argumento e retorna uma função que recebe um 
argumento, que por sua vez retorna uma função que recebe um argumento e retorna 
o resultado da função original.

Currying é uma técnica avançada de trabalhar com funções. Currying é uma 
transformação de funções que traduz uma função de callable como f(a, b, c) em 
f(a)(b)(c).

Ou seja, quando transformamos uma chamada de função sum(1,2,3) em sum(1)(2)(3)

## Por que é útil?
1. Currying ajuda a evitar passar a mesma variável repetidamente.
2. Ajuda a criar uma função de ordem superior

Currying transforma uma função com vários argumentos em uma sequência/série de 
funções, cada uma recebendo um único argumento.

Exemplo

```javascript
function soma(a, b, c) { 
    return a + b + c; 
}
soma(1,2,3); // 6
```

Como vemos, funcione com os argumentos completos. Vamos criar uma versão curry 
da função e ver como chamaríamos a mesma função (e obteríamos o mesmo resultado) 
em uma série de chamadas:

```javascript
function soma(a) { 
    return (b) => { 
        return (c) => { 
            return a + b + c 
        } 
    } 
}
console.log(sum(1)(2)(3)) // 6
```

Poderíamos separar esta soma(1)(2)(3) para entender melhor:

```javascript
const soma1 = soma(1); 
const soma2 = soma1(2); 
const resultado = soma2(3); 
console.log(resultado); // 6
```