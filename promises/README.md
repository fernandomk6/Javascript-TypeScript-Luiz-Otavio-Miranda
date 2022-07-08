# Promises part 1

[developer.mozilla.org](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise)

Promise é um objeto usado para processamento assíncrono. Uma promise representa um valor 
que pode estar disponível agora, no futuro ou nunca. 

## Definição

É uma classe que permite a construção de funções de processamento assíncrono representando 
um valor que poderá estar disponível no futuro.

Uma Promise representa um proxy para um valor que não é necessariamente conhecido quando 
a promessa é criada. Isso permite a associação de métodos de tratamento para eventos 
da ação assíncrona num caso eventual de sucesso ou de falha. Isto permite que métodos 
assíncronos retornem valores como métodos síncronos: ao invés do valor final, o 
método assíncrono retorna uma promessa ao valor em algum momento no futuro.

Um Promise está em um destes estados: 

- pending (pendente): Estado inicial, que não foi realizada nem rejeitada.
- fulfilled (realizada): sucesso na operação.
- rejected (rejeitado):  falha na operação.

Uma promessa pendente pode se tornar realizada com um valor ou rejeitada por um motivo (erro). 
Quando um desses estados ocorre, o método then do Promise é chamado, e ele chama o método de 
tratamento associado ao estado (rejected ou resolved).  Se a promessa foi realizada ou 
rejeitada quando o método de tratamento correspondente for associado, o método será 
chamado, desta forma não há uma condição de competição entre uma operação assíncrona 
e seus manipuladores que estão sendo associados.

Uma Promise é um objeto que representa a eventual conclusão ou falha de uma operação assíncrona. 

Essencialmente, uma promise é um objeto retornado para o qual você adiciona 
callbacks, em vez de passar callbacks para uma função.

## Métodos e propriedades

Seção contendo todos os métodos e propriedades do objeto Promise

### Principais

Seção contendo os principais métodos do Objeto Promise

#### Promise.all(lista)

Retorna uma promise que é resolvida quando todas as promises no argumento lista forem 
resolvidas ou rejeitada assim que uma das promises da lista for rejeitada. Se a promise 
retornada for resolvida, ela é resolvida com um array dos valores das promises resolvidas 
da lista. Se a promise for rejeitada, ela é rejeitada com o motivo da primeira promise que 
foi rejeitada na lista. Este método pode ser útil para agregar resultados de múltiplas promises.

#### Promise.race(lista)

Retorna uma promise que resolve ou rejeita assim que uma das promises do argumento lista 
resolve ou rejeita, com um valor ou o motivo daquela promise.

#### Promise.reject(motivo)

Retorna um objeto Promise que foi rejeitado por um dado motivo.

#### Promise.resolve(valor)

Retorna um objeto Promise que foi resolvido com um dado valor. Se o valor 
é thenable (possui um método then), a promise retornada "seguirá" este método, 
adotando esse estado eventual; caso contrário a promise retornada será realizada 
com o valor. Geralmente, se você quer saber se um valor é uma promise ou não, 
utilize Promise.resolve(valor) e trabalhe com a valor de retorno que é sempre 
uma promise.

### Estáticos

Lista com todos os métodos estaticos do objeto Promise

- all: ƒ all()
- allSettled: ƒ allSettled()
- any: ƒ any()
- length: 1
- name: "Promise"
- prototype: ...
- race: ƒ race()
- reject: ƒ reject()
- resolve: ƒ resolve()

### Herdados

Lista contendo todos os métodos e propriedades herdados do objeto Promise, ou seja 
todos aqueles que estão em Promise.prototype.

- catch: ƒ catch()
- constructor: ƒ Promise()
- finally: ƒ finally()
- then: ƒ then()

# Promises part 2

## Calbacks

Callback são chamados quando o processamento é concluído.

Faça isso e quando concluído, execute essa função em caso de sucesso ou
essa em caso de erro.

## then e catch

O then tenta resolver a promise. E é executado em caso de sucesso.
O catch é executado quando a função é rejeitada.

A promise quando criada ou retornada, seta os argumentos que serão passados 
para as funções callbacks resolve e rejected**.

O método then, recebe como argumento uma função de callback que é chamada 
em caso de sucesso. E o catch é chamado em caso de rejeição.

O valor que o then retorna é o valor que será recebido no then seguinte.
É como se o valor de retorno do then fosse o novo valor que é passado 
para o callback resolve.

O caback do then é o callback resolve que é setado na criação da promise

Apartir da segunda execução do then, o parametro do callback é 
setado pelo retorno do primeiro then

# Exercicios

- Criar várias funções que retornem promises e testa-las na janela
- Usar spinner para informar o carregamento
- Consumir API com fetch API e inserir informações na janela
- Consumir API com XMLHttpRequest e inserir informações na janela
- Ver na prática o callback hell
- Ler novamente toda essa documentação e refazer todos os exercícios
