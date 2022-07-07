# Entendendo os detalhes do break

- Definição

  O comando break encerra o **loop atual**, **switch**, ou o loop que foi informado 
  no **label** e transfere o controle da execução do programa para o comando seguinte.

  O comando break inclui um label **opcional** que permite ao programa encerrar a execução 
  da estrutura que possui o nome informado na label. O comando break deve estar dentro 
  dessa estrutura informada no label. A estrutura que possui o nome informada na label 
  pode ser qualquer **comando block**. Não é necessário que seja precedida por um loop.
  A instrução break pode ser usada para saltar de qualquer bloco de código.

- Sintaxe:

  `break [label];`

- label

  Opcional. Identificador associado ao label de um comando.
  Se a estrutura não for um loop ou switch, ele será um pré-requisito.

## Avançando em Break

Como ja sabemos o break funciona em todas as estruturas de repetição (fors e whiles),
porém o break também pode ser usado dentro de blocos.

Antes de usarmos o break em blocos, vamos entender o que são esses blocos

- Descrição

  A declaração em bloco é frequentemente chamada de declaração composta (compound) 
  em outras linguagens. Ela permite que você use multiplas declarações onde o 
  JavaScript espera apenas uma declaração. Combinar declarações em blocos são 
  uma prática comum em JavaScript. O comportamento oposto é possível usando 
  uma declaração vazia, onde você fornece nenhuma declaração, mesmo que uma 
  seja requerida.

- Sintaxe

  ```javascript
  {
    ListaDeDeclarações
  } // bloco não nomeado
  ```

  ```javascript
  NomeDoBloco: {
    ListaDeDeclarações
  } // bloco nomeado
  ```

- Escopo

  Segue as mesmas regras dos escopos de bloco (funções e estruturas de repetição / controle)

- Nome do Bloco

  Um nome (label) opcional para identificação visual ou um alvo para **break**.

### Agora um exemplo com break e blocos

O Break vai interromper o codigo do bloco atual, o bloco atual deve ser referenciado apois a
palavra break. `break nomeDoBloco;`

O break precisa está dentro do bloco que foi referenciado. 
É isso que acontece no switch. Que coisa não?

- Exemplos

```javascript
const test = 1;

test: {
  const test = 2; // 2 do escopo do bloco test
  console.log(test);
  break test;
  console.log('toras?');
}

console.log(test); // 1 do escopo global
```

```javascript
const test = 1;

test: {
  const test = 2; 
  console.log(test); // 2 do escopo do bloco test
  anotherBlock: {
    console.log('estou no outro bloco'); // imprimiu normal
    break anotherBlock; // bloco another bloco interrompido
    console.log('Toras?'); // não executado
  }
  console.log('Sai?'); // executado normalmente quando o bloco another bloco acaba
}

console.log(test); // 1 do escopo global
```

```javascript
const test = 1;

test: {
  const test = 2; 
  console.log(test); // 2 do escopo do bloco test
  anotherBlock: {
    console.log('estou no outro bloco'); // imprimiu normal
    break test; // bloco test interrompido
    console.log('Toras?'); // não executado
  }
  console.log('Sai?'); // executado normalmente quando o bloco another bloco acaba
}

console.log(test); // 1 do escopo global
```

Perceba que nesse ultimo exemplo o bloco externo foi encerrado dentro do bloco interno
isso é perfeitamente possivel.

- Exemplos completamente esquisitos

```javascript
if (true) tora:{
  console.log('serei impresso');
  break tora;
  console.log('não serei impresso');
}

// serei impresso
```

isso também é possivel, o if possui um bloco, e pode ser referenciado pelo break
igual fizemos nos exemplos acima.
Apenas as estruturas de repetição e o switch, não precisam referenciar o bloco;

Alem do if, é possivel usar também em estruturas de repetição

Apesar de não fazer sentido isso aqui também funciona

```javascript
const array = [1, 2, 3, 4];

loopNumbers:
for (number of array) {
  if (number == 2) {
    continue loopNumbers;
  }
  console.log(number);

  if (number == 3) {
    console.log('chegou no 3, irei encerrar agora');
    break loopNumbers;
  }
}
```

Perceba que o label está referenciando a execuxão do for

```javascript
test:
if (true) {
  console.log('serei impresso');
  break test;
  console.log('não serei impresso');
}

console.log('serei impresso? global');
```
---

#### Agora depois de aprendido tudo isso

Lembre-se

- Evite usar labels
- Use `break` e `continue` **apenas** para estruturas de repetição

Labels **não** são comunmente utilizados em JavaScript já que estes fazem com que 
programas fiquei mais difíceis de ler e entender.

Sempre que possível evite utilizar labels e, dependendo dos casos, 
prefira chamar **funções** ou **lançar um erro**.
