// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Resolveu');
//   }, 2000);
// });
// console.log(1);
// myPromise.then(result => console.log(result));
// console.log(2);

const asyncFunc = async () => {
  const data = await new Promise(resolve => {
    setTimeout(() => {
      resolve('Resolveu')
    }, 5000);
  });
  console.log(data);
  return data;
};

const p = asyncFunc();

console.log(1);
console.log(p);
console.log(2);
