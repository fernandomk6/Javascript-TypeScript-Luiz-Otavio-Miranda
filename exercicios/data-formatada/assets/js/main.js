const dateContainer = document.querySelector('.date');
const timeContainer = document.querySelector('.time');

function formatDate(date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const formatedHours = hours < 10 ? `0${hours}` : hours;
  const formatedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formatedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  
  const formatedDate = date.toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: ('long' || 'short' || 'numeric'),
    weekday: ('long' || 'short'),
    day: 'numeric',
  });
  const formatedTime = `${formatedHours}:${formatedMinutes}:${formatedSeconds}`;

  return [formatedDate, formatedTime];
}

function renderDate() {
  const date = new Date()
  const [formatedDate, formatedTime] = formatDate(date);

  dateContainer.innerHTML = formatedDate;
  timeContainer.innerHTML = formatedTime;
}

function init() {
  setInterval(renderDate, 1000);
}

init();


