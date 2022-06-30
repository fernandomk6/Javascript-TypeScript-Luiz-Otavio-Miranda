function* gen(a) {
  console.log('yield 1');
  yield a + 1;

  console.log('yield 2');
  yield a + 2;

  console.log('acabou');
  return a;
}

const objRenerator = gen(1);
console.log(objRenerator.next());
console.log(objRenerator.next());
console.log(objRenerator.next());

// uma função geradora sempre retornará um objeto generator
// esse objeto possui um metodo next, que pode ser usado para acessar
// um outro objeto contendo duas propriedade, value que é o valor
// retornado pelo yield, e done, que recebe um boolean, informando
// se o generator acabou

// return pode ser usado no final do generetor, para que sua ultima execução 
// retorne o valor atribuido ao return

// o generator é como uma função que pode ser executada ate a 
// metade e retornado um valor