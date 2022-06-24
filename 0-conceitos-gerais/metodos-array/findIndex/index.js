const names = ['fernando', 'pedro', 'larissa'];
const nameToFind = 'pedro';

const indexOfNameFinded = names.findIndex((name, index, names) => {
  return name === nameToFind ? name : null;
});

console.log(indexOfNameFinded);

