// declarações do dom
const $mainForm = document.querySelector('#main-form');
const $resultText = document.querySelector('#result-text');

const verifyIMC = imc => {
  let diagnostic;

  if (imc < 18.55) {
    diagnostic = 'Abaixo do peso';
  } else if (imc >= 18.5 && imc <= 24.9) {
    diagnostic = 'Peso normal';
  } else if (imc >= 25 && imc <= 29.9) {
    diagnostic = 'sobrepeso';
  } else if (imc >= 30 && imc <= 34,9) {
    diagnostic = 'Obesidade grau 1';
  } else if (imc >= 35 && imc <= 39.9) {
    diagnostic = 'Obesidade grau 2';
  } else if (imc > 40) {
    diagnostic = 'Obesidade grau 3';
  }

  return diagnostic;
};

const showIMC = imc => {
  const message = `Seu IMC é ${imc} (${verifyIMC(imc)})`;

  $resultText.innerHTML = message;
  $resultText.classList.remove('hide');
  $resultText.classList.add('result-imc-sucess');
};

const showError = () => {
  const message = `Dados inválidos`;

  $resultText.innerHTML = message;
  $resultText.classList.remove('hide');
  $resultText.classList.add('result-imc-error');
};

const validationForm = form => {
  const weight = Number(form.weight.value);
  const height = Number(form.height.value);

  if (weight && height) {
    return [weight, height];
  } 
};

const calculateIMC = e => {
  e.preventDefault();
  const [weight, height] = validationForm(e.target) || showError();

  const imc = (weight / (height * height)).toFixed(2);

  showIMC(imc);
};

$mainForm.addEventListener('submit', calculateIMC);