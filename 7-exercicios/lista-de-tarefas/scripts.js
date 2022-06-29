// global declarations
const input = document.querySelector('.list-input-container input');
const addButton = document.querySelector('.list-input-container button');
const taskList = document.querySelector('.list-content');

// functions
function saveTask() {
  const tasks = [];
  for (const task of taskList.querySelectorAll('li')) {
    tasks.push(task.innerText.replace('Excluir', '').trim()); 
  }
    
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function buildTask(taskText) {
  const li = document.createElement('li');
  const button = document.createElement('button');
  button.dataset.script = 'delete-btn';

  li.innerHTML = taskText;
  button.innerHTML = 'Excluir';

  li.appendChild(button);
  return li;
}

function addtask () {
  if (!input.value) return;

  const taskText = input.value;
  const taskElement = buildTask(taskText);

  input.value = '';
  taskList.prepend(taskElement);
  input.focus();
  saveTask();
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  if (tasks) {
    for (const task of tasks) {
      taskList.appendChild(buildTask(task));
    }
  }
}

loadTasks();

// events
input.addEventListener('keypress', event => {
  if (event.key === 'Enter') {
    addtask();
  }
});

addButton.addEventListener('click', addtask);

document.addEventListener('click', event => {
  if (event.target.dataset.script === 'delete-btn') {
    event.target.parentElement.remove();
    saveTask();
  }
});
