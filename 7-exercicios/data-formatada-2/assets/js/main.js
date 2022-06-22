const dateContainer = document.querySelector('.date');
const timeContainer = document.querySelector('.time');

function formatDate(date) {
  const daysWeek= [
    'domingo',
    'segunda-feira',
    'terça-feira',
    'quarta-feira',
    'quita-feira',
    'sexta-feira',
    'sábado'
  ];
  
  const monthNames = [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro'
  ];

  const dayWeek = date.getDay();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const formatedDayWeek = daysWeek[dayWeek];
  const formatedDay = day < 10 ? `0${day}` : day;
  const formatedMonth = monthNames[month];
  const formatedHours = hours < 10 ? `0${hours}` : hours;
  const formatedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formatedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  const formatedDate =
    `${formatedDayWeek}, ${formatedDay} de ${formatedMonth} de ${year}`;
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


