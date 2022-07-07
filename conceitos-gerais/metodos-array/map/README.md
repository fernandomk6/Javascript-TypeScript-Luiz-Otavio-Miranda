# Array.prototype.map()

O método map() invoca a função callback passada por argumento para cada elemento
do Array e devolve um novo Array como resultado.

O método map não modifica o array original. No entanto, a função callback 
invocada por ele pode fazê-lo.

O array novo array retornado pelo map, sempre vai ter o mesmo length do array
original

```javascript
const numbers = [1, 4, 9];
const doubles = numbers.map(function(num) {
  return num * 2;
});
```
