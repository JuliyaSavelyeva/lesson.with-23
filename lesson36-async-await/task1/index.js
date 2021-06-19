// async function func() {
//   return 1;
// }

// const result = func();
// console.log(result);

// ===================================================

// async function func() {
//   const promise = new Promise(resolve => {
//     setTimeout(() => {
//       resolve(17);
//     }, 1000);
//   });
//   const result = await promise;
//   console.log(result);
//   return result;
// }

// const result = func();
// result.then(data => console.log(data));

// =================================================

export const fetchUser = async userId => {
  try {
    const response = await fetch(`https://api.github.com/users/${userId}`);
    if (!response.ok) {
      return null;
    }
    const userData = await response.json();
    console.log(userData);
    return userData;
  } catch {
    throw new Error('Failed to fetch user');
  }
};

fetchUser('facebook')
  .then(data => console.log(data))
  .catch(err => alert(err.message));
