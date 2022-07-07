let myNumber = null;
let attempts = 0;

do {
  myNumber = Math.round(Math.random() * 10); 
  attempts++;
} while (myNumber !== 2);

console.log(attempts, myNumber);
