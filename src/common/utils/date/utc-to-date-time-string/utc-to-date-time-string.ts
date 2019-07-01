import { format } from 'date-fns';

export const utcToDateTimeString = (utcDate: number) => {
  const date = new Date(utcDate * 1000);
  return [
    format(date, 'DD-MM-YYYY'),
    format(date, 'HH:MM')
  ];
};
