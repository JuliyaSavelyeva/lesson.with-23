
localStorage.clear();
localStorage.setItem('name', 'Tom');
localStorage.setItem('hobbies', JSON.stringify({name: 'Ann'}));
localStorage.setItem('name', 'Cler');
localStorage.setItem('age', JSON.stringify(17));


// console.log(JSON.parse(localStorage.getItem('hobbies')));

// const getLocalStorageData = () =>
//   Object.entries(localStorage)
//   .reduce((acc, [key, value]) => ({...acc, [key]: JSON.parse(value)}), {});

// console.log(getLocalStorageData());

export const getLocalStorageData = () =>
  Object.entries(localStorage)
  .reduce((acc, [key, value]) => {
    let newValue;
      try {
        newValue = JSON.parse(value)
      } catch(e) {
        newValue = value;
      }
    return {
      ...acc, 
      [key]: newValue
    }
  }, {});

console.log(getLocalStorageData());
