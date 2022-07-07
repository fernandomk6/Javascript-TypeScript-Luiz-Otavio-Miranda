let str = 'fernando é um cara coisado';
let arr = [1,2,3];
let obj = {username: 'fernando', email: 'fernandomk6@gmail'};

// for (let index = 0; index < str.length; index++) {
//   console.log(str[index]);
// }

// for (let caractere in str) {
//   console.log(str[caractere]);
// }

// for of pega direto o valor da propriedade e não seu nome / index
// for (let caractere of str) {
//   console.log(caractere);
// }

for (let data of arr) {
  console.log(data);
}

// for of so funciona com iteravel, array e strings basicamente
// objeto não é iteravel não funciona o for off
// para iterar objeto use o for in