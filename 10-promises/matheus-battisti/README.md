# Promises
[Aprenda tudo sobre Promises de JavaScript](https://www.youtube.com/watch?v=87gWRVGRZ5o)

Promises são como promesas da vida real, ela está esperando algum retorno. 
Para criarmos uma promise instanciamos a classe Promise que recebe como 
parametros, dois argumentos: resolve (solução) e rejected (erro). 
Para encadear mais processos usamos o metodo then. Alguns recursos do 
javascript como Fetch API e bibliotecas externas, retornam promises.

## Instanciando promises

Para criarmos uma promise instanciamos a classe Promise que recebe como 
parametros, dois argumentos: resolve (solução) e rejected (erro)

Resolve e rejected são funções, que serão chamadas baseadas em uma condição
de sucesso ou falha. Resolve é a função que será executada em caso de 
sucesso, e rejected é a função que será executada em caso de falha.

## Executando uma promise

Para executar uma promise chamamos o método then

O parametro data é o resultado de resolve ou rejected
É o argumento que foi passado para resolve ou rejected,
callbacks da instancia da promise.

A instancia da classe Promise não faz nenhuma ação.
A ação so é executada quando chamado o metodo then.

Promise recebe como argumento uma callback function,
que tem 2 argumentos, resolve e rejected,
resolve e rejected são funções, que serão chamadas baseadas
em alguma condição.

Quando o metodo tem é chamado no objeto instancia de promise,
uma dessas funções ou resolve ou rejected serão executadas,
e o seu valor de retorno é passado como argumento para o callback
do metodo then.

O retorno do da função rejected retorna uma excecão.

## Encadeando thens

O retorno do metodo tehen é outra promise

O parametro do callback do primeiro then é o resultado do callback
resolve, da instancia do objeto promise.
O segundo then, passa como argumento para o callback, o retorno
do callback do primeiro then, que também é uma promise.

Dessa forma garantimos que um callback so será executado depois da conclusão
do anterior.

O primeiro é o resolve, o outros serão os retornos dos metodos thens.

## Tratando retornos do rejected

Como vimos o rejected retorna uma excecão, mas isso pode ser tratado usando o
método catch.

O método catch trata o retorno do callback rejected, e evita que o erro seja lançado.
O método catch, recebe como parametro de callback o retorno do callback rejected.

Não necessariamente o parametro do catch será o retorno do callback rejected,
pode ser que ele seja um erro do servidor, ou até mesmo um erro proposital do 
desenvolvedor.

O método catch() retorna uma Promise e lida apenas com casos rejeitados. 
Ele possui o mesmo comportamento de quando chamamos Promise.prototype.then(undefined, onRejected) 
(de fato, chamando obj.catch(onRejected) internamente é chamado 
obj.then(undefined, onRejected)).

## Resumo até aqui

Then e catch são usados para tratar resultados esperados e não esperados
e não interromper o fluxo do código.

## Resolvendo várias promeses de uma vez só

### Método All

O método all recebe como parametro um array de promises e tentará executar todas elas.

Ele retorna uma nova promise. Quando usado o then nessa promise, será recebido como
argumento, um array contendo todos os retornos de sucesso das promeses resolvidas.
Caso alguma dessas promises do array seja rejeitada,
o all retornará uma promise contendo o valor dessa rejeição.

Metodo all so termina de executar quando todas as promises foram resolvidas, ou seja
ele espera ate a que demorar mais, não necessariamente até a ultima, as promises são
executadas assincronamente mas o metodo all so retorna um valor quando todas as promises
foram resolvidas ou quando a primeira delas for rejeitada.

### Método race

Faz a mesma coisa que o all porém retorna apenas a primeira promises que resolveu
ou foi rejeitada.