import { renderTasks } from './renderer.js';
import { deleteTask, getTasksList } from './tasksGateway.js';

export const onDeleteTask = e => {
  const taskId = e.target.dataset.id;

  deleteTask(taskId)
    .then(() => getTasksList())
    .then(() => renderTasks());
};
