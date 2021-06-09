const listElem = document.querySelector('.list');
const inputElem = document.querySelector('.task-input');
const buttonElem = document.querySelector('.create-task-btn');

let tasks = [
  { text: 'Buy milk', done: false, id: Math.random() },
  { text: 'Pick up Tom from airport', done: false, id: Math.random() },
  { text: 'Visit party', done: false, id: Math.random() },
  { text: 'Visit doctor', done: true, id: Math.random() },
  { text: 'Buy meat', done: true, id: Math.random() },
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
    id: Math.random(),
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
  const newTasks = tasks.map(elem => {
    if (elem.id == event.target.dataset.id) {
      const done = event.target.checked;
      return {
        ...elem,
        done,
      }
    }
    return elem;
  })
  listElem.innerHTML = '';
  tasks = newTasks;
  renderTasks(tasks);
};

listElem.addEventListener('click', onCheckbox);