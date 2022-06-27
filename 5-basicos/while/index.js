/**
 * while é util quando não sabemos exatamente quantas vezes o loop precisará ser executado
 * sabemos apeanas que ele precisará terminar quando algo acontecer, mas não sabemos, quando isso vai acontecer.
 * cada iteração deve tentar fazer com que a condição seja satisfeita, caso contrario você terá um loop
 * infinito
 */

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

const attemptsPerDay = Math.round(attempts / daysToTry);
const message = `${attemptsPerDay} tentativas por dia durante${years} ano${years > 1 ? 's' : ''}`;

console.log();
