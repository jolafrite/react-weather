export const pick = <T, K extends keyof T>(obj: T, paths: K[]): Pick<T, K> => {
  return { ...paths.reduce((mem, key) => ({ ...mem, [key]: obj[key] }), {}) } as Pick<T, K>;
}
