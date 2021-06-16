import { renderTasks } from './renderer.js';
import { updateTask, getTasksList } from './tasksGateway.js';

export const onToggleTask = e => {
  const updatedTasksList = tasksList => {
    const taskId = e.target.dataset.id;
    const { text, createDate } = tasksList.find(task => task.id === taskId);

    const done = e.target.checked;

    const updatedTaskData = {
      text,
      createDate,
      done,
      finishDate: done ? new Date().toISOString() : null,
    };

    updateTask(taskId, updatedTaskData)
      .then(() => getTasksList())
      .then(() => renderTasks());
  };

  getTasksList().then(tasksList => updatedTasksList(tasksList));
};

// Prepare data
// Update data to db
// Read new data from server
// Save new data to front-end storage
// Update UI
