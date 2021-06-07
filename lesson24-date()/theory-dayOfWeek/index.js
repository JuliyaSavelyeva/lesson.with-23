export const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];

const dayOfWeek = (date, days) => {
  const day = new Date(date).getDate();
  const dayOfFuture = new Date(date).setDate(day + days);
  return  weekDays[new Date(dayOfFuture).getDay()];
} 

const result = dayOfWeek(new Date(2021, 5, 7), 3);
console.log(result);
