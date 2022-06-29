const input = document.querySelector('.list-input-container input');
const addButton = document.querySelector('.list-input-container button');
const taskList = document.querySelector('.list-content');

function buildTask(taskText) {
  const li = document.createElement('li');
  const button = document.createElement('button');

  li.innerHTML = taskText;
  button.innerHTML = 'Excluir';

  li.appendChild(button);
  return li;
}

function addtask () {
  const taskText = input.value;
  const taskElement = buildTask(taskText);

  input.value = '';
  taskList.appendChild(taskElement);

  loadDeleteTask();
}

function loadDeleteTask() {
  const deleteButtons = document.querySelectorAll('.list-content button');
  deleteButtons.forEach(button => {
    button.addEventListener('click', event => {
      event.target.parentElement.remove();
    });
  });
}

addButton.addEventListener('click', addtask);
