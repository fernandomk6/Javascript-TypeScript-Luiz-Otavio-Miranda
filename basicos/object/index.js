// parametros é o que a função recebe
// argumento é o que é passado para a função
// o parametro recebe o argumento

function criaPessoa (nome, sobrenome, idade) {
  return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade
  };
}

const o = criaPessoa('fernando', 'henrique', 23);

console.log(o);