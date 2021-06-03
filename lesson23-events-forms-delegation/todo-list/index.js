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
  const onCreateLi = () => {
    
    console.log(tasks);
    return tasksList;
  }
  tasksList.unshift({ text: `${inputElem.value}`, done: false });
  // onCreateLi();

  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
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

const render = renderTasks.bind(null, tasks);

buttonElem.addEventListener('click', render);
