const pessoas = [
  {id: 1, nome: 'fernando'},
  {id: 2, nome: 'larissa'},
  {id: 3, nome: 'pedro'}
];

const novasPessoas = {};
for (const pessoa of pessoas) {
  const {id} = pessoa;
  novasPessoas[id] = {...pessoa};
}

// const novasPessoas = new Map();
// for (const pessoa of pessoas) {
//   const {id} = pessoa;
//   novasPessoas.set(id, {...pessoa});
// }

console.log(novasPessoas);