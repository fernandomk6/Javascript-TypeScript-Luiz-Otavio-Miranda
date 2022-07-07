function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
  if (this.saldo < valor) {
    console.log(`Saldo insuficiente. Tentando sacar ${valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })} e sua conta possui apenas ${this.saldo.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })}`);

    return;
  }

  this.saldo = this.saldo - valor;
  this.verSaldo();
};

Conta.prototype.depositar = function(valor) {
  this.saldo = this.saldo + valor;
  this.verSaldo();
};

Conta.prototype.verSaldo = function () {
  console.log(`Ag/c: ${this.agencia}/${this.conta} | Saldo: ${this.saldo.toLocaleString('pt-BR', {
    style: 'currency', currency: 'BRL'
  })}`);
};

function CC(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

CC.prototype.sacar = function(valor) {
  if (this.saldo + this.limite < valor) {
    console.log(`Saldo insuficiente Tentando sacar ${valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })} Valor em conta ${this.saldo.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })} Limite de ${this.limite.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })}`);

    return;
  }

  this.saldo = this.saldo - valor;
  this.verSaldo();
}

function CP(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}

CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;

const contaCP = new CP(1111, 2222, 100);
contaCP.verSaldo();
contaCP.sacar(150);