# Callback

É uma **declaração** de função que é são passadas para outra função como argumento.

A função que recebe o callback, fica responsável por passar os argumentos.

## O que é uma operação assíncrona

Código assíncrono pode iniciar um processo agora, e finaliza-lo
posteriormente. Requests são exemplos de operações assíncronas.

As funções assíncronas são empilhadas em uma thread serarada do
da main thread que é síncrona. 

Quando a função assíncrona é concluida, o callback dela é
adicionado ao final da pilha da main thread e é chamada.