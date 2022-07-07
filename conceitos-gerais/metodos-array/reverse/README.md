# Array.prototype.reverse()

O método reverse() inverte os itens de um array. O primeiro elemento do array se
torna o último e o último torna-se o primeiro.

O método reverse transpõe os elementos do objeto array no mesmo lugar, 
**mutando** o array, e retornando uma referência para o mesmo.

```javascript
var myArray = ['one', 'two', 'three'];
myArray.reverse();

console.log(myArray) // ['three', 'two', 'one']
```