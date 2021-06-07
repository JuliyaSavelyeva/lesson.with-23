const listElem = document.querySelector('.list');
const inputElem = document.querySelector('.task-input');
const buttonElem = document.querySelector('.create-task-btn');

const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const renderTasks = tasksList => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('data-id', id);
      checkbox.dataset.id = Math.random();
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

// ===========================================================

const onCreateLi = () => {
  if (inputElem.value === '') {
    return;
  }
  listElem.innerHTML = '';
  tasks.unshift({ 
    text: `${inputElem.value}`, 
    done: false,
    id: Math.random().toString(),
  });
  renderTasks(tasks);
  inputElem.value = '';
}

buttonElem.addEventListener('click', onCreateLi);

// ====================================================================

const checkboxElem = document.querySelectorAll('input[type="checkbox"]');
const listItemEl = document.querySelectorAll('li');

const onCheckbox = (event) => {
  if (!event.target.classList.contains('list__item-checkbox')) {
    return;
  }
  const liElement = event.target.closest('.list__item');
  const id = event.target.dataset.id;
  const index = [...checkboxElem].findIndex(el => el.dataset.id === id);
  
  if (event.target.checked) {
    // liElement.classList.add('list__item_done');
    tasks[index] = { text: `${liElement.textContent}`, done: true };
    listElem.innerHTML = '';
    renderTasks(tasks);
  }
  if (!event.target.checked) {
    // liElement.classList.remove('list__item_done');
    tasks[index] = { text: `${liElement.textContent}`, done: false };
    listElem.innerHTML = '';
    renderTasks(tasks);
  }
  
  console.log(tasks);
};

listElem.addEventListener('click', onCheckbox);