export const requestUserData = userId => new Promise((resolve, reject) => {
  if (userId === 'broken') {
    setTimeout(() => {
      reject(new Error('User not found'));
    }, 500);
  };
  setTimeout(() => {
    resolve({
      name: 'John',
      age: 17,
      userId,
      email: `${userId}@example.com`,
    });
  }, 1000);
});

requestUserData('user-1')
  .then(data => console.log(data));
  

requestUserData('broken')
  .catch(error => console.log(error));