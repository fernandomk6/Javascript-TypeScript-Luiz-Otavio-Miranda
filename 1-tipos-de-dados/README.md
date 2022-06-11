# Em javascript temos 7 tipos de dados
- string
- number
- boolean
- undefined
- null
- symbol
- object

string, number, boolean, undefined, null e symbol, são tipos de dados 
primitivos (não pode ser passado por referencia). 

object é um tipo de dado não primitivo (pode ser passado por referencia)

**Tipos de dados primitivos não possuem um prototype**
'a string literal'.length
O literal é convertido temporariamente em um objeto, o método é invocado e o  
objeto é descartado.
Os literais têm algumas vantagens distintas sobre os objetos.

false, dois objectos diferentes com mesmos valores
alert( new String('string') == new String('string') ); 

true, valores literais identicos
alert( 'string' == 'string' );

"Literal" é um valor que você escreve literalmente no seu script, pode ser  
atribuindo a uma variável, ou passando com argumento de uma função, ou até  
escrever solto no seu script, sem atribuir ou setar nada, o que importa é  
que se escreve exatamente o que será o valor

Literais são exatamente escrever o valor, por exemplo isto seria um  
"Array literal":
```
var x = [ "a", "b", "c" ];
```
Isto já não é:
```
var x = new Array();

x.push("a");
x.push("b");
x.push("c");
```

**Para fixar**
Tipos de dados literias não são objetos por si só
o javascript apenas transforma (temporariamente) em objeto, quando tentamos  
acessar um metodo ou propriedade. Literias não possuem prototype. 
Literais são
- 'fernando' - string
- 1 - number
- true - boolean
- undefined - undefined
- null - object
- symbol - estudar mais sobre isso depois...
- object - podem ser escrito de forma literal, porem, possuem metodos e  
propriedades. Não são como strings que são transformadas temporariamente em
Objetos. Eles são nativamente objetos, por isso não são PRIMITIVOS, mas podem  
ser literais... 

## lista de dados e seus respectivos prototypes
- string - String
- number - Number
- boolean - Boolean
- undefined - Não possui prototype
- null - não possui prototype
- symbol - Symbol
- object - Object

## Observações
- null é do tipo object
- array do tipo object
- inteiro e real são tudo number em javascript
- o tipo de dados number possui 3 propriedades especiais
  - NaN  
  - -infinity  
  - infinity
- Todas funções em javascript são um Objeto Function

---
## Objetos fundamentais em javascript
[Fonte](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects)

  ### Propriedades globais retornam um valor simples
  Eles não tem propriedades ou métodos.  
  - Infinity
  - NaN
  - undefined

  ### Estes são objetos básicos nos quais todos os outros objetos são baseados. 
  Isso inclui objetos que representam objetos genéricos, funções e erros.
  - Object
  - Function
  - Boolean
  - Symbol
  - Error
  - EvalError
  - InternalError
  - RangeError
  - ReferenceError
  - StopIteration
  - SyntaxError
  - TypeError
  - URIError

  ### Estes são objetos para a representação de números e datas.
  - Number
  - Math
  - Date

  ### Estes objetos representam strings e manipulam as mesmas.
  - String
  - RegExp

  ### Coleções indexadas
  Estes objetos representam coleções de dados que são ordenados pelo valor de 
  um índice. Isso inclui arrays (tipados) e arrays baseados em outros 
  construtores, como [].
  - Array

  ### Estes objetos representam e interagem com buffers de dados estruturados.
  - JSON

  ### Controle de abstrações de objetos
  - Promise Experimental
  - Generator Experimental"

  ### Outros
  - arguments
