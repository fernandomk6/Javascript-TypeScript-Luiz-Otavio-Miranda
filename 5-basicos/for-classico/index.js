//  for (variavel contadora; condição; incremento) {bloco de codigo que sera execuado ate a contição ser truthy}
for (let counter = 0; counter <= 10; counter = counter + 1) {
  console.log(counter);
}

const myArray = [1, 2, 3, 4, 5, 6];
for (let index = 0; index < myArray.length; index++) {
  console.log(`${index}º index é ${myArray[index]}`);
}