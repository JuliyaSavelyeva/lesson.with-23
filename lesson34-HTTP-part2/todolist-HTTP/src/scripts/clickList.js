import { onToggleTask } from './updateTask.js';
import { onDeleteTask } from './deleteTask.js';

export const onClickList = e => {
  const isCheckbox = e.target.classList.contains('list-item__checkbox');
  const isDeleteBtn = e.target.classList.contains('list-item__delete-btn');

  if (isCheckbox) {
    onToggleTask(e);
  }

  if (isDeleteBtn) {
    onDeleteTask(e);
  }
};
