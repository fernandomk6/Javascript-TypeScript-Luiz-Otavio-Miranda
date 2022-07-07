# Array.prototype.findIndex()

Retorna o primeiro indice satisfaça uma condição

O método findIndex() retorna o índice no array do primeiro elemento que 
satisfizer a função de teste provida. Caso contrário, retorna -1, 
indicando que nenhum elemento passou no teste.

Parâmetros

1. callback: Função para executar em cada valor no array, tendo três argumentos:
  - element: O elemento atual sendo processado no array.
  - index: O índice do elemento atual sendo processado no array.
  - array: O array sobre o qual findIndex foi chamado.