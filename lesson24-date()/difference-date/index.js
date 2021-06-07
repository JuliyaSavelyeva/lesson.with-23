export const getDiff = (startDate, endDate) => {
  const startDay = new Date(startDate).getTime();
  const endDay = new Date(endDate).getTime();
  const difference = startDay - endDay;

  const dayFull = difference / (1000 * 60 * 60 * 24);
  const day = Math.trunc(dayFull);

  const hourFull = (dayFull - day) * 24;
  const hour = Math.trunc(hourFull);

  const minutesFull = (hourFull - hour) * 60;
  const minutes = Math.trunc(minutesFull);

  const secondsFull = (minutesFull - minutes) * 60;
  const seconds = Math.trunc(secondsFull);

  return `${Math.abs(day)}d ${Math.abs(hour)}h ${Math.abs(minutes)}m ${Math.abs(seconds)}s`;
}

const result = getDiff(new Date(2021, 5, 24, 6, 23, 38), new Date(2021, 5, 25, 13, 25, 46), );
console.log(result);