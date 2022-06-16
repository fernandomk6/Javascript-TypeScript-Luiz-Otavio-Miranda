# Entenda como o this funciona  
## Conceito geral
> Em JavaScript, usa-se this de forma semelhante ao uso de pronomes em   
linguagens naturais, como o inglês ou francês. Escreve-se: “João está correndo  
rápido porque ele está tentando pegar o trem”. Note o uso do pronome “ele”.  
Poderia se ter escrito: “João está correndo rápido porque João está tentando  
pegar o trem”. Não se reutiliza “João” dessa maneira, pois se assim fosse,  
nossa família, amigos e colegas nos abandonariam… De uma maneira graciosamente  
semelhante, em JavaScript se usa a palavra-chave this como um atalho, um  
referente; ou seja, o sujeito no contexto ou o sujeito do código em execução.  

## This em function declaration tradicional
```javascript
const foo = {
  getThis() {
    return this; 
  },

  anotherObj: {
    getAnotherThis() {
      return this;
    }
  }

};

console.log(foo.getThis());
// this retorna o objeto que está encadeado.
// no caso o objeto foo

console.log(foo.anotherObj.getAnotherThis());
// neste caso o this retorna o objeto anotherObj
// pois o metodo que usa this, esta encadeado em anotherObj
```

**O this sempre REFERENCIA, o objeto que esta DIRETAMENTE encadeado**
OU
**Em funções regulares, a palavra this representa o objeto que chama a função**

---

## This em arrow functions  

- Com uma função de seta thisrepresenta o proprietário da função  
- Com funções de seta, a palavra- thischave sempre representa o objeto que  
definiu a função de seta  
- O valor this do contexto léxico encapsulado é usado  
- Ex: Arrow functions seguem as regras normais de pesquisa de variáveis  
- O escopo de uma arrow function pode ser tanto o escopo de uma função ou o  
escopo global, dentro de quaisquer que seja onde a arrow function foi declarada  

```javascript
class Person {
  constructor(name) {
    this.name = 'fernando';
    this.sayHello = () => {
      console.log(this);
      return `Hello ${this.name}`;
    }
  }
};

const fernando = new Person('Fernando');
console.log(fernando.sayHello());

// Person { name: 'fernando', sayHello: [Function (anonymous)] }
// Hello fernando
```

Perceba que o this na arrow não é definido, ele é uma copia do this,  
no escopo em que foi DECLARADO.  
Perceba que o this anteriormente setava o .name, e esse this, faz referencia  
a instancia da classe. Logo o this do arrow function, vai "copiar", esse this.  
Usando a mesma logica que copiaria uma variavel normal.

## Diferenças entre funções arrow e tradicionais
Uma função de seta é diferente de uma função normal apenas de duas maneiras  
- As seguintes construções são lexicais: arguments, super, this,new.target  
- Não pode ser usado como construtor: funções normais suportam new através do  
método interno `[[Construct]]` e da propriedade prototype. As funções de seta  
não têm nenhum, e é por isso que `new (() => {})` gera um erro