## Delete Operator

`delete` O operador JavaScript remove uma **propriedade de um objeto**.

```javascript
const myArray = [1, 2, 3];
const myObj = {name: 'fernando', age: 23};

console.log(myArray, myObj);
// [ 1, 2, 3 ] { name: 'fernando', age: 23 }

delete myArray[0];
delete myObj.name; // ou delete myObj['name'];

console.log(myArray, myObj);
// [ <1 empty item>, 2, 3 ] { age: 23 }
```

É importante considerar os seguintes cenários

Se a propriedade que você está tentando excluir não existir, delete 
não terá nenhum efeito e retornará true.

Se existir uma propriedade com o mesmo nome na cadeia de protótipos 
do objeto, então, após a exclusão, o objeto usará a propriedade da 
cadeia de protótipos (ou seja, delete só tem efeito nas próprias propriedades).

Qualquer propriedade declarada com var, const e let não pode ser excluída do escopo 
global ou do escopo de uma função. Como tal, delete não pode excluir nenhuma função 
no escopo global.

As funções que fazem parte de um objeto (além do escopo global) podem ser 
excluídas com delete.

Qualquer propriedade declarada com let ou const não pode ser excluída do 
escopo dentro do qual foi definida.

Propriedades não configuráveis ​​não podem ser removidas. Isso inclui 
propriedades de objetos internos como Math, Array e Object propriedades 
que são criadas como não configuráveis ​​com métodos como Object.defineProperty().
