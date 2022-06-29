const startBtn = document.querySelector('#start-btn');
const stopBtn = document.querySelector('#stop-btn');
const clearBtn = document.querySelector('#clear-btn');
const timer = document.querySelector('#timer span');

let secondsPassed = 0;
let intervalTimer = 0;


function renderTime() {
  const initialTime =  new Date(1998, 08, 21).getTime();
  const timeFormated = new Date(initialTime + secondsPassed).toLocaleTimeString('pt-BR');

  secondsPassed += 1000;
  timer.innerHTML = timeFormated;
}

function startTimer() {
  startBtn.setAttribute('disabled', true);
  intervalTimer = setInterval(renderTime, 1);
}

function stopTimer() {
  startBtn.removeAttribute('disabled');
  clearInterval(intervalTimer);
}

function clearTimer() {
  secondsPassed = 0;
  renderTime();
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
clearBtn.addEventListener('click', clearTimer);
