# Anotações gerais sobre arrays

Arrays são passados por referencia pois não são dado primitivo, são um objeto.

```javascript
const oldArray = [1,2,3];
const newArray = oldArray;

oldArray.pop();

console.log(oldArray, newArray); // [ 1, 2 ] [ 1, 2 ]
```

Ao inves disso utilize o rest operator

```javascript
const oldArray = [1, 2, 3];
const newArray = [...oldArray];

oldArray.pop();

console.log(oldArray, newArray); // [ 1, 2 ] [ 1, 2, 3 ]
```

O comportamente esperado agora ocorre

Metodos

- pop(estourar): remove o ultimo elemento do array e o retorna
- push(empurre): adiciona um elemento ao final do array e retorna o novo length do array
- shitf(mudança): remove o primeiro elemento do array e o retorna
- unshift(deslocar): adiciona um elemento ao inicio do array e retorna o novo length do array
- slice(fatiar): recebe indice inicial, inidice final como parametro e retorna uma parte do 
array, não altera o array original
- split(dividir) String: recebe um separador como argumento e retorna um array
- join(juntar): recebe um separador como argumento e retorna uma string
- splice(emendar): adiciona ou remove elemento de um array, retorna os elementos removidos em um 
novo array **altera** o array original
```javascript
const names = ['fernando', 'pedro', 'helenice', 'manoel'];

names.splice(1, 0, 'larissa');
console.log(names);
// ['fernando', 'larissa', 'pedro', 'helenice', 'manoel']

const removed = names.splice(0, 2);
console.log(names, removed);
// ['pedro', 'helenice', 'manoel'] ['fernando', 'larissa'] 

const larissaEFernando = removed.splice(-2, 2);
console.log(larissaEFernando);
// [ 'fernando', 'larissa' ]

const what = removed.splice(0, 0, 1, 2, 3, 4, true, {}, [1, 2, 3], function tora(){return 'toras?'});
console.log(removed);
// [ 1, 2, 3, 4, true, {}, [ 1, 2, 3 ], [Function: tora] ]
console.log(what);
// []
```

- concat(concatenar): recebe varios arrays por parametros e retorna um novo array com 
com os elementos concatenados ao array original, não altera os arrays originais

```javascript
// utilizando concat
const a1 = [1,2,3]
const a2 = [4,5,6];
const a3 = a1.concat(a2);
console.log(a1, a2, a3);

// utilizando spread
const a3Alt = [...a1, ...a2];
console.log(a1, a2, a3Alt);
```

- filter(filtrar): cria um novo array com todos os elementos que passaram no teste 
implementado pela função fornecida, não altera o valor original. Sempre retorna um array de length menor, ou igual

```javascript
const numbers = [15, 62, 84, 02, 35, 16, 15, 23, 99, 02, 3, 4, 20, 100];

const biggerThan50 = numbers.filter(number => number > 50);
console.log(biggerThan50);
// [ 62, 84, 99, 100 ]

// outra forma
const numbers = [15, 62, 84, 02, 35, 16, 15, 23, 99, 02, 3, 4, 20, 100];

const isBiggerThan50 = (element, index, array) => {
  return element > 50;
};

const biggerThan50 = numbers.filter(isBiggerThan50);
console.log(biggerThan50);
// [ 62, 84, 99, 100 ]
```

- map(mapear): Altera valores do array, usado quando queremos gerar um novo array 
de um array de origem, com o mesmo numero de elementos. Não altera o array 
original. Apenas pop, push, shift, unshift e splice alteram o array original.

- forEach(para cada): Executa uma dada função em cada elemento de um array. Retorna
undefined.

- reduce(reduzir): Executa uma função callback para cada elemento do array, resultando 
num único valor de retorno.

- indexOf(index de): Procura no array por um elemento a partir do índice e 
retorna o índice onde foi en encontrado. Se não encontrar retorna -1;
 
- lastIndexOf(ultimo indece de): Exatamente como o anterior. A diferença é que 
ele inicia a partir do fim do array;
 
- includes(inclui): Procura no array pelo elemento a partir do índice e 
retorna true se encontrar e false se não encontrar. É usado para verificar
se um objeto existe em um array

- find(ache): Retorna o valor do primeiro elemento no array que atendeu a condição

- findIndex(ache o indice): Retorna o índice do primeiro elemento no 
array que atendeu a condição

- every(todos): Testa se todos os elementos do array passam pelo teste implementado
pela função fornecida. Retorna true se a função de callback retorna um valor truthy 
para cada um dos elementos do array; caso contrário, false.

- some(algum): Testa se ao menos um dos elementos no array passa no teste implementado 
pela função atribuída e retorna um valor true ou false. Retornar true se a função callback 
retornar true para qualquer elemento do array; caso contrário, false.

- reverse(reverte): Inverte a ordem dos elementos do nosso array.

- sort(ordenar): ordena o array

- Array.isArray(é um array): Retorna true se a variável é um array e false caso contrário.
