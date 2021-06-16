const baseUrl = 'https://60c9bcb9772a7600172043fe.mockapi.io/api/v1/users';

export const getUsersList = () => fetch(baseUrl).then(response => response.json(response));

export const getUserById = userId =>
  fetch(`${baseUrl}/${userId}`).then(response => response.json(response));

export const createUser = userData =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  });

export const deleteUser = userId =>
  fetch(`${baseUrl}/${userId}`, {
    method: 'DELETE',
  });

export const updateUser = (userId, userData) =>
  fetch(`${baseUrl}/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  });

// examples
// getUsersList().then(users => {
//   console.log(users); // array of the user objects [{'id':'1', 'firstName':'Grayce' ... }, {'id':'2', 'firstName':'Ara' ... }, ...]
// });

// getUserById('2').then(userData => {
//   console.log(userData); // {'id':'2', 'firstName':'Ara' ... }
// });

const newUserData = {
  email: 'cool@email.com',
  firstName: 'Iron',
  lastName: 'Man',
  age: 42,
};

// createUser(newUserData).then(() => {
//   console.log('User created');
// });

const updatedUserData = {
  email: 'new@email.com',
  firstName: 'John',
  lastName: 'Doe',
  age: 17,
};

// deleteUser('12').then(() => {
//   console.log('User updated');
// });

updateUser('1', updatedUserData).then(() => {
  console.log('User updated');
});

getUsersList().then(users => {
  console.log(users); // array of the user objects [{'id':'1', 'firstName':'Grayce' ... }, {'id':'2', 'firstName':'Ara' ... }, ...]
});
