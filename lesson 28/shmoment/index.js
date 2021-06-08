// 1. create variables of time Interval
// 2. write function check time Interval,
// 3. create object with methods add and subtract


export const shmoment = (date) => {
  let initialDate = new Date(date);

  const years = initialDate.getFullYear();
  const month = initialDate.getMonth();
  const days = initialDate.getDate();
  const hours = initialDate.getHours();
  const minutes = initialDate.getMinutes();
  const seconds = initialDate.getSeconds();
  const milliseconds = initialDate.getMilliseconds();

  // const checkTimeInterval = (timeInterval, num) => {
  //   if (timeInterval === 'years') {
  //     return new Date(initialDate).setFullYear(years + num);
  //   }
  //   if (timeInterval === 'month') {
  //     return new Date(initialDate).setMonth(month + num);
  //   }
  // } 

  const calculatorDate = {
      add(timeInterval, num) {
        if (timeInterval === 'years') {
          initialDate = new Date(initialDate).setFullYear(years + num);
        }
        return this;
      },

      subtract(timeInterval, num) {
        if (timeInterval === 'years') {
          initialDate = new Date(initialDate).setFullYear(years + num);
        }
        return this
      },

      result() {
        return new Date(initialDate);
      }
  };

  return calculatorDate;
}

console.log(shmoment(new Date(2021, 5, 7, 12, 13, 45)).add('years', 1).subtract('years', 1).result());



const dayOfWeek = (date, days) => {
  const day = new Date(date).getDate();
  const dayOfFuture = new Date(date).setDate(day + days);
  return  weekDays[new Date(dayOfFuture).getDay()];
} 