const weekDays = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday"
];

export const getDateWeekDay = (date: Date | string): string => {
  return weekDays[new Date(date).getDay()];
};
