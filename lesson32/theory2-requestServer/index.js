const getRandomNumber = (from, to) =>
  from + Math.random() * (to - from);


const request = (url) => new Promise(resolve => {
  const randomDelay = getRandomNumber(1000, 3000);
  setTimeout(() => {
    resolve({
      userData: {
        name: 'Tom',
        age: 17,
      },
      source: url,
    })
  }, randomDelay);
})

const server = [
  'https://server.com/us',
  'https://server.com/eu',
  'https://server.com/au',
];

export const getUserASAP = userId => {
  const userUrls = server
    .map(serverUrl => `${serverUrl}/${userId}`);

  const requests = userUrls
    .map(userUrl => request(userUrl));
  return Promise.race(requests);
}

getUserASAP('user-id')
  .then(res => console.log(res));

