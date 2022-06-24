# Closures

Closure é um conceito em linguagem de programação que, de forma simplificada, 
permite que uma função acesse variáveis de sua função parente.

```javascript
function start() {
    const message = "hello world";

    function display() {
        console.log(message);
    }

    display();
}
```

No exemplo a função display tem acesso a variável message, mas note que a 
variável foi declarada no corpo da função parente start. A função "de dentro" 
tem acesso as variáveis da "função de fora". display no exemplo é considerado um
closure.

Mas, mais ainda, as variáveis referenciadas da função parente continuam 
disponíveis mesmo ao final de sua execução. Segue outro exemplo:

```javascript
function getDisplay() {
    const message = "hello world";    
    return function display() {
        console.log(message);
    };
}

const display = getDisplay();
display();
```

Note que agora a exibição do valor de message é feito mesmo após sua função 
(getDisplay) já ter terminado sua execução.

## Referencia e não valor

Como você deve ter percebido pela maioria dos exemplos que existem por aí, com 
closure é feita a cópia das referências das variáveis, e não de seus valores.

Isto significa que ao alterar o valor de uma variável dentro de um closure todos
os outros contextos que possuem referência para essa variável irão obter este 
valor quando acessá-la. Cuidado com eventuais efeitos colaterais.