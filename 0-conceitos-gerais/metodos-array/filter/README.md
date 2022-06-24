# Array.prototype.filter()

Retornar um novo array com todos os itens que passaram na condição

O método filter() cria um novo array com todos os elementos que passaram no 
teste implementado pela função fornecida.

filter() chama a função callback fornecida, uma vez para cada elemento do array,
e constrói um novo array com todos os valores para os quais o callback retornou
o valor true ou um valor que seja convertido para true (truthy). O callback é chamado 
apenas para índices do array que possuem valores atribuídos. Ele não é 
invocado para índices que foram excluídos ou para aqueles que não tiveram 
valor atribuído. Elementos do array que não passaram no teste do callback 
são simplesmente ignorados, e não são incluídos no novo array.

```javascript
function isBigEnough(value) {
  return value >= 10;
}

var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtrado é [12, 130, 44]
```

Função é um predicado, para testar cada elemento do array. Retorna true para 
manter o elemento, false caso contrário:

## Valor de retorno

Um novo array com os elementos que passaram no teste.
