const startBtn = document.querySelector('#start-btn');
const stopBtn = document.querySelector('#stop-btn');
const clearBtn = document.querySelector('#clear-btn');
const timer = document.querySelector('#timer span');

let secondsPassed = 0;
let intervalTimer = 0;

function getInitialDate() {
  const initialDate = new Date();
  initialDate.setHours(0);
  initialDate.setMinutes(0);
  initialDate.setSeconds(0);
  initialDate.setMilliseconds(0);
  return initialDate;
}

function renderTime() {
  const initialDate = getInitialDate();
  const timeFormated = new Date(initialDate.getTime() + secondsPassed).toLocaleTimeString('pt-BR');

  secondsPassed += 1000;
  timer.innerHTML = timeFormated;
}

function startTimer() {
  startBtn.setAttribute('disabled', true);
  intervalTimer = setInterval(renderTime, 1);
  console.log(intervalTimer);
}

function stopTimer() {
  startBtn.removeAttribute('disabled');
  console.log(intervalTimer);
  clearInterval(intervalTimer);
}

function clearTimer() {
  secondsPassed = 0;
  renderTime();
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
clearBtn.addEventListener('click', clearTimer);
