const mainImg = document.querySelector('#main-img');
const showDog = document.querySelector('#show-dog');
const url = 'https://dog.ceo/api/breeds/image/random';

const validateHTTPRequest = (response) => {
  if (response.ok) {
    return response.json();
  }

  throw new Error(`HTTP Error: status: ${response.status} ${response.statusText}`);
};

const setSrcAtribute = ({message}) => {
  mainImg.setAttribute('src', message);
};

const handleHTTPError = ({message}) => {
  alert(message);
};

const updateButtonText = () => {
  const loadingMessage = 'Carregando';
  const clickText = 'Ver outro cachorrinho';

  showDog.innerHTML = showDog.innerHTML === loadingMessage ? clickText : loadingMessage;
};

const requestImage = () => {
  updateButtonText();

  fetch(url)
    .then(validateHTTPRequest)
    .then(setSrcAtribute)
    .catch(handleHTTPError)
    .finally(updateButtonText);
}

showDog.addEventListener('click', e => {
  requestImage();
});

showDog.click();