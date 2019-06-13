export const utcToDateTimeString = (utcDate: number) => {
  const date = new Date(utcDate * 1000);
  return date.toISOString().substr(0, 19).replace('T', ' ');
}
