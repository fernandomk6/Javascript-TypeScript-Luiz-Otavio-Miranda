# SOLID

[medium.com](https://medium.com/desenvolvendo-com-paixao/o-que-%C3%A9-solid-o-guia-completo-para-voc%C3%AA-entender-os-5-princ%C3%ADpios-da-poo-2b937b3fc530)

SOLID é um acrônimo criado por Michael Feathers, após observar que cinco princípios da orientação 
a objetos e design de código poderiam se encaixar nesta palavra.

- S — Single Responsiblity Principle (Princípio da responsabilidade única)
- O — Open-Closed Principle (Princípio Aberto-Fechado)
- L — Liskov Substitution Principle (Princípio da substituição de Liskov)
- I — Interface Segregation Principle (Princípio da Segregação da Interface)
- D — Dependency Inversion Principle (Princípio da inversão da dependência)

## SRP - Single Responsibility Principle

Esse princípio declara que uma classe deve ser especializada em um único assunto 
e possuir apenas uma responsabilidade dentro do software, ou seja, a classe deve 
ter uma única tarefa ou ação para executar.

Quando estamos aprendendo programação orientada a objetos, sem sabermos, damos a 
uma classe mais de uma responsabilidade e acabamos criando classes que fazem de 
tudo — God Class*. Num primeiro momento isso pode parecer eficiente, mas como as 
responsabilidades acabam se misturando, quando há necessidade de realizar alterações 
nessa classe, será difícil modificar uma dessas responsabilidades sem comprometer 
as outras. Toda alteração acaba sendo introduzida com um certo nível de incerteza 
em nosso sistema — principalmente se não existirem testes automatizados!

## OCP - Open/Closed Principle

Princípio Aberto-Fechado — Objetos ou entidades devem estar abertos para extensão, 
mas fechados para modificação, ou seja, quando novos comportamentos e recursos 
precisam ser adicionados no software, devemos estender e não alterar o código 
fonte original.

## LSP— Liskov Substitution Principle

Princípio da substituição de Liskov — Uma classe derivada deve ser substituível 
por sua classe base.

Se S é um subtipo de T, então os objetos do tipo T, em um programa, podem ser 
substituídos pelos objetos de tipo S sem que seja necessário alterar as propriedades 
deste programa.

## ISP — Interface Segregation Principle

Princípio da Segregação da Interface — Uma classe não deve ser forçada a implementar 
interfaces e métodos que não irão utilizar.

Esse princípio basicamente diz que é melhor criar interfaces mais específicas ao 
invés de termos uma única interface genérica.

## DIP — Dependency Inversion Principle

Princípio da Inversão de Dependência — Dependa de abstrações e não de implementações.

De acordo com Uncle Bob, esse princípio pode ser definido da seguinte forma:

1. Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem 
depender da abstração.

2. Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações.
