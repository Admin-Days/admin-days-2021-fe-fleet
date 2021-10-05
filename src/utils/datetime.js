export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const formatTwoDigit = (number) => {
  const num = Number(number)
  return num < 10 ? '0' + num : num
}

export const getDateAndMonth = (datetime, shortMonth = true) => {
  return `${datetime.getDate()} ${
    shortMonth
      ? months[datetime.getMonth()].substring(0, 3)
      : months[datetime.getMonth()]
  }`;
};

export const getTime = (datetime, suffix="") => {
  const hours = formatTwoDigit(datetime.getHours())
  const minutes = formatTwoDigit(datetime.getMinutes())
  return `${hours}:${minutes} ${suffix}`
}
