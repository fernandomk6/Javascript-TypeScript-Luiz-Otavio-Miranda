// função executa uma ação
// funções devem fazer uma caoisa apenas
// funções podem retornar dados

function traditionalFunction() {
  return true;
}

const anonimousFunction = function () {
  return true;
}

const arrowFuntion = param => param;

console.log(traditionalFunction());
console.log(anonimousFunction());
console.log(arrowFuntion('Pamps'));