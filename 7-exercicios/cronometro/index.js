// setInterval(e => console.log(new Date(time+=1000)), .3);
const startBtn = document.querySelector('#start-btn');
const stopBtn = document.querySelector('#stop-btn');
const clearBtn = document.querySelector('#clear-btn');
const timer = document.querySelector('#timer span');
const initialDate = new Date();
initialDate.setHours(0);
initialDate.setMinutes(0);
initialDate.setSeconds(0);
initialDate.setMilliseconds(0);
let intervalTimer = 0;

let secondsPassed = 0;
function renderTime(initialDate) {
  const timeFormated = new Date(initialDate.getTime() + secondsPassed).toLocaleTimeString('pt-BR');
  secondsPassed += 1000;
  timer.innerHTML = timeFormated;
}

function startTimer() {
  
  intervalTimer = setInterval(e => {
    renderTime(initialDate);
  }, 0.1);
  
  stopTimer(intervalTimer);
  clearTimer();
}

function stopTimer(intervalTimer) {
  stopBtn.addEventListener('click', e => {
    clearInterval(intervalTimer);
  });
}

function clearTimer() {
  clearBtn.addEventListener('click', e => {
    secondsPassed = 0;
    renderTime(initialDate);
  });
}

startBtn.addEventListener('click', startTimer);
