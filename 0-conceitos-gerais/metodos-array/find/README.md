# Array.prototype.find()

Usado para **retornar um valor especifico**, o primeiro que satisfazer uma
condição

O método find executa a função callback uma vez para cada elemento presente no 
array até que encontre um onde callback retorne o valor true.

Se o elemento é encontrado, find retorna imediatamente o valor deste elemento. 
Caso contrário, find retorna undefined. O callback é acionado para todos os 
índices do array de 0 a length - 1, não apenas para aqueles que possuem valores 
atribuídos. Sendo assim, ele pode ser menos eficiente para arrays muito grandes 
em que existem outros métodos que só visitam os índices que tenham valor 
atribuído.

## Parâmetros

1. callback
  - element: O elemento atual que está sendo processado no array.
  - indexOptional: O índice do elemento atualmente sendo processado no array.
  - arrayOptional: O array sobre o qual find foi chamado.

### Valor retornado

O valor do primeiro elemento do array que satisfaz a função de teste fornecida
caso contrário, undefined.

```javascript
const musicsTitle = ['thunderstruck', 'hells bells', 'holly diver', 'holly wars'];

const musicToFind = 'thunderstruck';

const findedMusic = musicsTitle.find(music => music === musicToFind);

console.log(findedMusic); // thunderstruck
```