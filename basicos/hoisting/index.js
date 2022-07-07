// em javasctipr as declarações (veja diferenças entre declarar e iniciar) 
// são elevadas ao topo do codigo
// sayHello();

// funciona pois a função esta sendo apenas declarada
// function sayHello() {
//   console.log('hello');
// }

// Cannot access 'sayHello' before initialization
// nesse exemplo não funciona pq say hello é declarada e iniciada pois esta,
// tendo seu valor setado (sendo usada)
// const sayHello = function() {
//   console.log('hello');
// }

// basicamente declarações de funções traducionais são movidas para o 
// topo do codigo.

// na verdade o motor do javascript não move para o topo do codigo, apenas
// ler primeiro todas as declarações de funções tradicionais e deixa elas
// guardada na memoria
