# Prototype

Todos os objetos tem uma referencia interna para um proprotipo (`__proto__`)
que vem da propriedade proptotype da função construtora que foi usada, para cria-lo.
Ao tentar acessar a propriedade de um objeto, o motor do javascript ira procurar
essa propriedade no objeto atual, se não encontrar, ele ira buscar, na cadeia de prototypes
ate encontrar, ou caso não encontre, undefined será retornado.