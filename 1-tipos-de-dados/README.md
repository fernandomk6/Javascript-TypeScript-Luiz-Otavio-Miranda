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
