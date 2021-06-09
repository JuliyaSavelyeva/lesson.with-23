const requestUserData = userId => {
  const request = new Promise((resolve, reject) => {
    if (userId === 'broken') {
      setTimeout(() => {
        reject(new Error('user not found'));
      }, 1000);
    }
    setTimeout(() => {
      resolve({
        name: 'John',
        age: 17,
        email: `${userId}`,
        userId,
      });
    }, 2000);
  })

  return request;
}

requestUserData('user-1')
  .then(data => console.log(data));
  

requestUserData('broken')
  .catch(error => console.log(error));