# Array.prototype.every()

O método every() testa se todos os elementos do array passam pelo teste 
implementado pela função fornecida.

Parâmetros

1. callback: Função que testa cada elemento, recebe três parametros:
  - currentValue: O elemento atual sendo processado na array. 
  - index (opcional): O índice do elemento atual sendo processado na array.
  - array (opcional): O array de origem.

Valor de retorno

true se a função de callback retorna um valor truthy para cada um dos elementos 
do array; caso contrário, false.

O método every executa a função callback fornecida uma vez para cada elemento 
presente no array, até encontrar algum elemento em que a função retorne um valor
falsy. Se esse elemento é encontrado, o método every imediatamente retorna 
false. Caso contrário, se a função callback retornar true para todos elementos, 
o método retorna true.  A função callback é chamada apenas para os elementos do 
array original que tiverem valores **atribuídos**;

Exemplo

```javascript
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough);   // false
[12, 54, 18, 130, 44].every(isBigEnough); // true
```

Exemplo 2 

```javascript
const arrayOfNames = ['fernando', 'pedro', 'julia', 0];

console.log(arrayOfNames.every((name, index, arrayOfNames) => {
  return typeof name === 'string' ? true : false;
})); // false
```