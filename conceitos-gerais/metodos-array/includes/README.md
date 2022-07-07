# Array.prototype.includes()

Verifica se o array inclui o elemento passado por parametro, se sim,
retorna um true, false caso contrario.

O método includes() determina se um array contém um determinado elemento, 
retornando true ou false apropriadamente.

Parâmetros

1. `searchElement` O elemento a buscar
2. `fromIndex` Opcional. A posição no array de onde a busca pelo searchElement 
se iniciará. Por padrão, 0.

```javascript
[1, 2, 3].includes(2);     // true
[1, 2, 3].includes(4);     // false
[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true
```

```javascript
const crazyArray = ['fernando', {}, true, 0, Infinity];
console.log(crazyArray.includes(Infinity)); // true
```