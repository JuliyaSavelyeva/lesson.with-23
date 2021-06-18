// const successRequests = Promise.resolve({ name: 'Tom' });

// successRequests
//   .then(data => {
//     console.log(data);
//     throw new Error('Unexpected error');
//   })
//   .catch(err => console.warn(err.message));

// ====================================================

// const failedRequest = Promise.reject(new Error('Fail'));

// failedRequest
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.warn(err.message);
//     // return Promise.reject(err);
//     throw err;
//   })
//   .then(data => {
//     console.log(data);
//   });

// window.addEventListener('unhandledrejection', e => console.log(e.reason.message));

// =================================================================

fetch('https://api.github.com/users/github')
  .then(response => {
    if (response.status === 200) {
      return response.json();
    }
    throw new Error('no data');
  })
  .then(data => console.log(data))
  .catch(err => console.warn(err));
