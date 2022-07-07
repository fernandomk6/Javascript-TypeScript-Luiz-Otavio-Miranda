# Array.prototype.forEach()

Utilizado para iterar sobre todos os itens do array de forma generica,
não retorna nenhum valor.

O método forEach() executa uma dada função em cada elemento de um array.

O forEach executa o callback fornecido uma vez para cada elemento da ordem com 
um valor atribuido. Ele não é invocado para propriedades de índices que foram 
deletados ou que não foram inicializados.

callback é invocado com três argumentos:

1. o valor do elemento
2. o índice do elemento
3. o array que está sendo percorrido

forEach() executa a a função callback uma vez para cada elemento do array – 
diferentemente de map() ou reduce(), ele **sempre retorna o valor undefined** e 
não é encadeável. O caso de uso típico é alterar o array no final do loop.

```javascript
function logArrayElements(element, index, array) {
    console.log("a[" + index + "] = " + element);
}
[2, 5, 9].forEach(logArrayElements);
// logs:
// a[0] = 2
// a[1] = 5
// a[2] = 9
```