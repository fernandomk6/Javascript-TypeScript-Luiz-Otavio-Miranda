/*
  Para testar seus conhecimentos com classes, crie uma classe com nome "Admin", 
  essa classe deve extender uma segunda classe chamada "Usuario".

  A classe usuário deve receber dois parâmetros no método construtor, e-mail e 
  senha, e anotá-los em propriedades da classe. A classe "Admin" por sua vez não 
  recebe parâmetros mas deve repassar os parâmetros de e-mail e senha à classe pai 
  e marcar uma propriedade "admin" como true na classe.

  Agora com suas classes formatadas, adicione um método na classe Usuario chamado 
  isAdmin que retorna se o usuário é administrador ou não baseado na propriedade 
  admin ser true ou não.
*/

class Usuario {
  constructor(email, senha) {
    this.email = email;
    this.senha = senha;
    this.admin = false;
  }

  isAdmin() {
    return this.admin;
  }
}

class Admin extends Usuario {
  constructor(email, senha) {
    super(email, senha);
    this.admin = true;
  }
}

const fernando = new Usuario('fernandomk6@gmail.com', '123456');
const larissa = new Admin('larissa@gmail.com', '654321');

if (fernando.isAdmin()) {
  console.log('fernando é um administrador');
} else {
  console.log('Fernado não é um administrador');
}

if (larissa.isAdmin()) {
  console.log('Larissa é uma administradora');
} else {
  console.log('Larissa não é uma administradora');
}
