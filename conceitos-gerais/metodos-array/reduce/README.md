# Array.prototype.reduce()

O método reduce() executa uma função reducer (fornecida por você) para cada 
elemento do array, resultando num **único valor de retorno**.

```javascript
const array1 = [1, 2, 3, 4];

const initialValue = 0;
const sumWithInitial = array1.reduce((previousValue, currentValue) => 
  previousValue + currentValue, initialValue
);

console.log(sumWithInitial);
```

A função reducer recebe quatro parâmetros:

1. Acumulador (acc)
2. Valor Atual (cur)
3. Index Atual (idx)
4. Array original (src)

O valor de retorno da sua função reducer é atribuída ao acumulador. 
O acumulador, com seu valor atualizado, é repassado para cada iteração 
subsequente pelo array, que por fim, se tornará o valor resultante final.