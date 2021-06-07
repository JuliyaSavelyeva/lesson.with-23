export const getDiff = (startDate, endDate) => {
  const startDay = new Date(startDate).getTime();
  const endDay = new Date(endDate).getTime();
  const difference = startDay - endDay;
  console.log(difference);

  const day = 

  // const startHour = new Date(startDate).getHours();
  // const endHour = new Date(endDate).getHours();
  // const hour = startHour - endHour;

  // const startMinutes = new Date(startDate).getMinutes();
  // const endMinutes = new Date(endDate).getMinutes();
  // const minutes = startMinutes - endMinutes;

  // const startSeconds = new Date(startDate).getSeconds();
  // const endSeconds = new Date(endDate).getSeconds();
  // const seconds = startSeconds - endSeconds;

  return `${Math.abs(day)}d ${Math.abs(hour)}h ${Math.abs(minutes)}m ${Math.abs(seconds)}s`

}

const result = getDiff(new Date(2021, 5, 25, 13, 13, 46), new Date(2020, 5, 15, 6, 23, 38));
console.log(result);