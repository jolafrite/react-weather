export const range = (from: number, to: number, step = 1): number[] => {
  return Array.from(
    { length: Math.floor((to - from) / step) + 1 }, (v, k) => from + k * step
  );
};
