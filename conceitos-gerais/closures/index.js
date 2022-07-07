function outer() {
  let myNumber = 9; // pertence ao escopo lexico de inner
  function inner() {
    return myNumber;
  }
  return inner();
}

function test() {
  let myNumber = 10; // não é acessado
  console.log(outer());
}

test();
