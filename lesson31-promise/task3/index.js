export const delay = (time) => new Promise(resolve => {
  setTimeout(() => {
    resolve();
  }, time);
})

delay(500)
  .then(() => console.log('Done'));