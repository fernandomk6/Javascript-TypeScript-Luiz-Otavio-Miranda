const container = document.querySelector('.container');
const date = new Date();

function formatDatetime(aDate) {
 return aDate.toString();
}

function renderDate(formatedDate, containerDate) {
  containerDate.innerHTML = formatedDate;
}

renderDate(formatDatetime(date), container);