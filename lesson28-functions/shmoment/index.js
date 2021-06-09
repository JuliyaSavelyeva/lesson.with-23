// 1. create variables of time Interval
// 2. write function check time Interval,
// 3. create object with methods add and subtract


export const shmoment = (date) => {
  let initialDate = new Date(date);

  let years = initialDate.getFullYear();
  let month = initialDate.getMonth();
  let days = initialDate.getDate();
  let hours = initialDate.getHours();
  let minutes = initialDate.getMinutes();
  let seconds = initialDate.getSeconds();
  let milliseconds = initialDate.getMilliseconds();

  const checkTimeIntervalAdd = (timeInterval, num, operator) => {

    if (timeInterval === 'years') {
      initialDate = new Date(initialDate).setFullYear(operator ? years + num : years - num);
      years = new Date(initialDate).getFullYear();
    }
    if (timeInterval === 'months') {
      initialDate = new Date(initialDate).setMonth(operator ? month + num : month - num);
      month = new Date(initialDate).getMonth();
    }
    if (timeInterval === 'days') {
      initialDate = new Date(initialDate).setDate(operator ? days + num : days - num);
      days = new Date(initialDate).getDate();
    }
    if (timeInterval === 'hours') {
      initialDate = new Date(initialDate).setHours(operator ? hours + num : hours - num);
      hours = new Date(initialDate).getHours();
    }
    if (timeInterval === 'minutes') {
      initialDate = new Date(initialDate).setMinutes(operator ? minutes + num : minutes - num);
      minutes = new Date(initialDate).getMinutes();
    }
    if (timeInterval === 'seconds') {
      initialDate = new Date(initialDate).setSeconds(operator ? seconds + num : seconds - num);
      seconds = new Date(initialDate).getSeconds();
    }
    if (timeInterval === 'milliseconds') {
      initialDate = new Date(initialDate).setMilliseconds(operator ? milliseconds + num : milliseconds - num);
      milliseconds = new Date(initialDate).getMilliseconds();
    }
  } 

  const calculatorDate = {
      add(timeInterval, num) {
        checkTimeIntervalAdd(timeInterval, num, true);
        return this;
      },

      subtract(timeInterval, num) {
        checkTimeIntervalAdd(timeInterval, num, false);
        return this;
      },

      result() {
        return new Date(initialDate);
      }
  };

  return calculatorDate;
}

console.log(shmoment(new Date(2021, 5, 7, 12, 13, 45)).add('years', 1).add('month', 2).add('years', 1).subtract('years', 1).subtract('minutes', 3).result());

