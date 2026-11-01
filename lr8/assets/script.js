const input = document.getElementById('input');
const itemContainer = document.querySelector('.item-container');
const allBtn = document.getElementById('allBtn');
const doneBtn = document.getElementById('doneBtn');
const undoneBtn = document.getElementById('undoneBtn');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
function renderTasks() {   
  itemContainer.innerHTML = ''; 

  tasks.forEach((task, index) => {
    const item = document.createElement('div');
    item.className = 'item';
    item.dataset.index = index;

    let checkboxHTML = '';
    if (task.completed === false) {
      checkboxHTML = '<input type="checkbox" class="task-checkbox">';
    }

    let textClass = '';
    if (task.completed === true) {
      textClass = 'crossed';
    }
    item.innerHTML = `
      ${checkboxHTML}
      <p class="${textClass}">${task.text}</p>
      <time>${task.date}</time>
      <button class="icon">&times;</button>
    `;
    itemContainer.appendChild(item);
  });
}
input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const text = input.value.trim();
    if (text !== '') {
      const date = new Date().toLocaleString(); 
      
      tasks.push({ text: text, date: date, completed: false });
      
      saveTasks();   
      renderTasks(); 
      input.value = ''; 
    }
  }
});
renderTasks();
itemContainer.addEventListener('click', (event) => {
  const item = event.target.closest('.item');
  if (!item) return;

  const index = item.dataset.index; 

  if (event.target.classList.contains('task-checkbox')) {
    tasks[index].completed = true; 
    saveTasks();   
    renderTasks(); 
  }

  if (event.target.classList.contains('icon')) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
  }
});

itemContainer.addEventListener('dblclick', (event) => {
  const item = event.target.closest('.item');
  if (!item) return;
  const index = item.dataset.index;

  if (event.target.tagName === 'P') {
    const textElement = event.target;
    const originalText = textElement.textContent;
    textElement.contentEditable = true;
    textElement.focus();

    const saveEdit = () => {
      textElement.contentEditable = false;
      tasks[index].text = textElement.textContent;
      saveTasks();
      renderTasks();
    };

    textElement.addEventListener('blur', saveEdit);
    textElement.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        saveEdit();
      }
    });
  }
});


allBtn.addEventListener('click', () => {
  document.querySelectorAll('.item').forEach(item => item.classList.remove('d-none'));
});

doneBtn.addEventListener('click', () => {
  document.querySelectorAll('.item').forEach(item => {
    const isCrossed = item.querySelector('p').classList.contains('crossed');
    item.classList.toggle('d-none', !isCrossed); 
  });
});

undoneBtn.addEventListener('click', () => {
  document.querySelectorAll('.item').forEach(item => {
    const isCrossed = item.querySelector('p').classList.contains('crossed');
    item.classList.toggle('d-none', isCrossed);
  });
});
