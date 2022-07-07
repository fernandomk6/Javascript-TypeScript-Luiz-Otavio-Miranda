# Map

O objeto Map contém pares de chave-valor e lembra a ordem original 
da inserção das chaves. Qualquer valor (objetos e valores primitivos) 
podem ser usados como chave ou valor.

```javascript
const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));
// expected output: 1

map1.set('a', 97);

console.log(map1.get('a'));
// expected output: 97

console.log(map1.size);
// expected output: 3

map1.delete('b');

console.log(map1.size);
// expected output: 2
```

Um objeto Map itera seus elementos na order da inserção - um loop for...of 
retorna um array de [key, value] para cada iteração