# Generators

Enquanto os iteradores são ferramentas muito úteis, sua criação requer 
um cuidado devido à necessidade de manter explícito seu estado interno. 
Generators provêm uma alternativa poderosa: eles te permitem definir um 
algorítimo iterativo escrevendo uma função simples que pode manter seu 
estado próprio.

Generator é um tipo especial de função que trabalha como uma factory 
para iteradores. A função vira um generator se ela contém uma ou mais 
expressões yield e se ela usa a sintaxe function*.

Generators computam seus valores "yielded" por demanda, que os permitem 
representar sequências de forma eficiente que costumam ser trabalhosas 
ao serem computadas, ou até sequências infinitas como demonstradas acima.

O método next() (en-US) também aceita um valor que pode ser usado para 
modificar o estado interno de um generator. O valor passado pro next() 
será tratado como o resultado da última expressão yield que pausou o 
generator.

O objeto Generator é retornado por generator function e conforme 
iterable protocol e o iterator protocol.