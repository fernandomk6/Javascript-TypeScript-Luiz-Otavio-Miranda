# Array.prototype.some()

O método some() testa se ao menos um dos elementos no array passa no teste 
implementado pela função atribuída e retorna um valor true ou false.

`callback` é invocado somente para índices do array que contenham 
**valor definido**

Parâmetros

1. callback: Função para testar cada elemento, recebendo três argumentos:
  - `currentValue` O valor atual do elemento sendo processado no array.
  - `index` O índice do elemento atual sendo processado no array.
  - `array` O array onde o método some() foi chamado.

Valor de retorno

Esta função retorna true se a função callback retornar true para qualquer 
elemento do array; caso contrário, false.

some() executa a função callback uma vez para cada elemento presente no array 
até achar um onde o callback retorne um valor true. Se em qualquer dos elementos
o valor for encontrado, some() imediatamente retorna true. Caso contrario, 
some() retorna false. callback é invocado somente para índices do array que 
contenham valor definido; não é invocado para índices que foram deletados ou 
os quais nunca tiveram valor definido.

Exemplo 1

```javascript
function isBiggerThan10(element, index, array) {
  return element > 10;
}
[2, 5, 8, 1, 4].some(isBiggerThan10);  // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true
```

Exemplo 2

```javascript
const arrayOfNumbers = [0, 1, 2, 3, 'toras?'];
const haveString = arrayOfNumbers.some((number, index, arrayOfNumbers) => {
  return typeof number === 'string' ? true : false;
});

console.log(haveString);
```
