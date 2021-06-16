const baseUrl = 'https://crudcrud.com/api/357b8aca42d643ffb28c9fe3fb1df5ee/tasks';

export const getTasksList = () => fetch(baseUrl).then(response => response.json(response));

export const createTask = taskData =>
  fetch(baseUrl, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(taskData),
  });
