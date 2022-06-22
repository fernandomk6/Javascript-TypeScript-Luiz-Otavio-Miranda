const container = document.querySelector('.container');
const date = new Date();

function formatDate(date) {
 return date.toString();
}

function renderDate(formatedDate) {
  container.innerHTML = formatedDate;
}

renderDate(formatDate(date));