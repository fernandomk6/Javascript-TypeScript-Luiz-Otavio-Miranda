let myNumber = null;
let attempts = 0;
const years = 10;
const daysPerYear = 365;
const daysToTry = years * daysPerYear;

while (myNumber !== 10) {
  myNumber = Math.round(Math.random() * 50000000);
  attempts++;
}

console.log(`Apos ${attempts} tentativas, seu numero apareceu`);
console.log(`${Math.round(attempts / daysToTry)} tentativas por dia durante ${years} ano${years > 1 ? 's' : ''}`);
