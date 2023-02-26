export const getYearList = () => {
  const currentYear = new Date().getFullYear();
  const yearList = [];
  for (let year = 1900; year <= currentYear; year++) {
    yearList.push(year);
  }
  return yearList;
};

export const getMonthList = () => {
  const monthList = [
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
  return monthList;
};

export const getDateList = () => {
  const dateList = [];
  for (let date = 1; date <= 31; date++) {
    dateList.push(date);
  }
  return dateList;
};
