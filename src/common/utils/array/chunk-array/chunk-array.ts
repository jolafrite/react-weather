export const chunkArray = <T>(array: T[], size: number): T[][] => {
  return array.length >size
    ? [array.slice(0, size), ...chunkArray(array.slice(size), size)]
    : [array];
}
