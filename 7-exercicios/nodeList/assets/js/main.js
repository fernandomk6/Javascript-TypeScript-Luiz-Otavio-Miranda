const mainButton = document.querySelector('#main-btn');

function getRandomColor(){
  return `#${[0, 0, 0, 0, 0, 0].reduce(color => 
    color + Math.round(Math.random() * 9), '')}`; 
}

function changeColorParagraphs() {
  const paragraphs = document.querySelectorAll('.paragraph');
  
  paragraphs.forEach(element => {
    element.style.backgroundColor = getRandomColor();
  });
}

mainButton.addEventListener('click', changeColorParagraphs);
