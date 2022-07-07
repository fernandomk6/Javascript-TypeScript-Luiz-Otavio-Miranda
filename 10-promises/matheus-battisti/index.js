const p1 = new Promise((resolve, rejected) => {
  if (true) {
    setTimeout(() => {
      resolve('p1 ok');
    }, 5000);
  } else {
    rejected('p1 falhou');
  }
});

const p2 = new Promise((resolve, rejected) => {
  if (true) {
    setTimeout(() => {
      resolve('p2 ok');
    }, 3000);
  } else {
    rejected('p2 falhou');
  }
});


const p3 = new Promise((resolve, rejected) => {
  setTimeout(() => {
    resolve('p3 ok');
  }, 10000);

  setTimeout(() => {
    rejected('p3 falhou');
  }, 2000);
});

const race = Promise.race([p1, p2, p3]);
race.then(data => {
  console.log(data);
}).catch(error => {
  console.log(error);
});