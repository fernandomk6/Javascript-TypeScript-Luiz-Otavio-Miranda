const timer = document.querySelector('#timer span');

let secondsPassed = 0;
let intervalTimer = 0;

function renderTime() {
  const timeFormated = new Date(secondsPassed).toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC'
  });
  secondsPassed += 1000;
  timer.innerHTML = timeFormated;
}

document.addEventListener('click', event => {
  const element = event.target;
  
  if (element.id === 'start-btn') {
    let color = '';
    for (let index = 1; index < 7; index++) {
      color += Math.round(Math.random() * 9);
    }
    timer.style.color = '#' + color;
    clearInterval(intervalTimer);
    intervalTimer = setInterval(renderTime, 1000);
  }

  if (element.id === 'stop-btn') {
    timer.style.color = 'black';
    clearInterval(intervalTimer);
  }

  if (element.id === 'clear-btn') {
    timer.style.color = 'black';
    secondsPassed = 0;
    clearInterval(intervalTimer);
    renderTime();
  }
});
