# Module

Modulu é um objeto JS fornecido pelo node. Pode ser acessado globalmente.
E permite fazer a importação de código.

## Exportando

Existem três formas de exportar código usando o objeto module

`module.exports.customKey = variable`, `exports.customKey = variable`, `this.customKey = variable`.

## Importando

É usado o método require para importar um código.

`const myModule = require('./myModule');`.

`require('./myModule')` retorna o conteúdo do objeto module.exports que foi setado no arquivo myModule.

## Exemplo

No modulo:

```javascript
const sayHelloTo = function(name) {
  console.log(`Hello ${name}`);
}

module.exports.sayHelloTo = sayHelloTo;
```

No app:

```javascript
const myModule1 = require('./module1');

myModule1.sayHelloTo('Fernando');
```

## Exportando código diretamente

```javascript
// in module
module.exports = function sayMyName(yourName) {
  console.log(yourName);
}

// in app
const sayMyName = require('./node/custom_modules/module1');

sayMyName('Fernando');

```

## Navegando com caminhos absolutos

`./pasta` -> caminho relativo para frente a pasta atual.
Equivale a `pastaAtual/pasta`.

`../pasta` -> caminho relativo voltando uma pasta em relação a atual.
Equivale a `pastaAnteriorAAtual/pasta`

### Resumindo

- Utilize `./` para acessar as proximas pastas
- Utilize `../` para voltar uma pasta

## __filename e __dirname

### __dirname

é uma variável de ambiente que informa o caminho absoluto do diretório 
que contém o arquivo em execução no momento.

`c:\fernando\github\Javascript-Typescript-Luiz-Otavio-Miranda`

### __filename 

No Node.js retorna o nome do arquivo do código que é executado. 
Ele fornece o caminho absoluto do arquivo de código.

`c:\fernando\github\Javascript-Typescript-Luiz-Otavio-Miranda\index.js`

## path

`const path = require('path'); console.log(path); // {a Object}`

`require('path')` retorna um Objeto. Que possuí alguns métodos
para manipular caminhos no node. Veremos mais sobre ele adiante no curso,
é so para você saber que ele existe.