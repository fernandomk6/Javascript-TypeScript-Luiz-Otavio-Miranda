let num1 = 1;
let num2 = 2.5;

console.log(num1 + num2);

// transformando number em string
console.log(num1.toString() + num2);

// perceba que o valor de num1 não é alterado
console.log(typeof num1);

// sempre que houver uma string em uma operação de SOMA, haverá concatenação
console.log(num1.toString() + num2); // 12.5 string
// Perceba que o resultado de uma "soma" com string, alem de haver
// a concatenação, o resultado será sempre uma string.
// Isso ocorre apenas com a SOMA.

// nessas operções, a string é convertida para number, tudo como esperado
// os valores retornados são do tipo number em todos os casos
console.log(typeof (num1.toString() / num2)); // 0.4 number
console.log(typeof (num1.toString() - num2)); // -1.5 number
console.log(typeof (num1.toString() * num2)); // 2.5 number

// e agora?
console.log(num1.toString() + num2 - num2 / num2 + num2 * num2);
// "1" + 2.5 - 2.5 / 2.5 + 2.5 * 2.5
// "1" + 2.5 - 2.5 / 2.5 + 6,25
// "1" + 2.5 - 1 + 6,25
// "12.5" - 1 + 6,25
// 11.5 + 6,25
// 17,75 do tipo number

// tranformando um numero para string
console.log(typeof num1); // 1 number
num1 = num1.toString();
console.log(typeof num1); // '1' string

// arredondando numeros com mais de duas casas decimais
let num3 = 9.2695431524548
console.log(num3); // 9.2695431524548

// o numero é cortado apenas para duas casas decimais
// se o proximo digito depois da segunda casa decimal for maior que 5,
// o segundo numero decimal é arrendado para cima
// se o terceiro numero decimal for menor que 5, o numero apenas é cortado
// para 2 casas decimais

// nesse caso houve o arredondamento do segundo numero decimal
console.log(num3.toFixed(2)); // 9.27
// o valor original não foi alterado
console.log(num3); // 9.2695431524548

// é possivel também exibir mais de duas casas decimais, basta mudar
// o parametro do metodo toFixed
// perceba que agora mão ouve o arredondamento pq o proximo numero decimal
// que foi cortado, não é maior que 5
console.log(num3.toFixed(4)); // 2695

// verificando se um numero é inteiro
// um boolean é retornado
let num4 = 1;
console.log(Number.isInteger(num3)); // false
console.log(Number.isInteger(num4)); // true

// Operações matematicas com letra, sempre retornarão um NaN
console.log(1 + 'felas?'); // 1felas?, pois como vimos soma com string concatena
console.log(1 - 'felas?'); // NaN
console.log(1 / 'felas?'); // NaN
console.log(1 * 'felas?'); // NaN

// verificando se um algo é um NaN
console.log(Number.isNaN(1 + 'felas?')); // false
console.log(Number.isNaN(1 * 'felas?')); // true

// convertendo um dado para um number
console.log(Number('felas?')); // NaN
console.log(Number.isNaN(1 * Number('felas?'))); // true

// Number('qualquer string'); sempre retornará um NaN

console.log(Number('53.66')); // 53,66
console.log(typeof Number('53.66')); // number a conversão ocorreu
console.log(Number.isNaN(1 * Number('53.66'))); // false


// Total esculhambação nas precisões dos decimais...
console.log(0.7 + 0.1); // 0.7999999999999999 muito bom!

// string para numero de ponto flutuante
console.log(parseFloat("1.5"));
console.log(Number.isInteger(parseFloat("1.5"))); // false pois é quebrado

// string para numero de ponto flutuante
console.log(parseInt("1.9")); // 1 pois é retornado um inteiro, não arredonda
console.log(Number.isInteger(parseFloat("1.9"))); // false pois é quebrado


// imprecisoes novamente
let num6 = 1.1;
let num7 = 0.1;
num6 += num7; // 1.2
num6 += num7; // 1.3
num6 += num7; // 1.4
num6 += num7; // 1.5
num6 += num7; // 1.6
num6 += num7; // 1.7
console.log(num6); // 1.7000000000000006
// resolvendo o problema
console.log(num6.toFixed(2)); // 1.70
