function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.dizerNome = function sayName(){
  return this.nome;
}

function Camisa(nome, preco, cor) {
  Produto.call(this, nome, preco);
  this.cor = cor;
}

Camisa.prototype = Produto.prototype;
Camisa.prototype.constructor = Camisa;

const camisaPreta = new Camisa('camisa preta masculina', 59.99, 'preta');

console.log(camisaPreta);
