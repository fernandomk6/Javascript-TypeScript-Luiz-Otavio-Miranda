const addElements = document.querySelector('#add-elements');
const elements = [
  {tag: 'p', text: 'p element'},
  {tag: 'div', text: 'div element'},
  {tag: 'footer', text: 'footer element'},
  {tag: 'section', text: 'section element'}
];

function insertElements(elements) {
  const body = document.querySelector('body');
  const container = document.createElement('main');

  for (let index = 0; index < elements.length; index++) {
    let {tag, text} = elements[index];
    container.innerHTML += `<${tag}>${text}</${tag}>`;
  }
  
  body.appendChild(container);
};

addElements.addEventListener('click', () => {
  insertElements(elements);
});