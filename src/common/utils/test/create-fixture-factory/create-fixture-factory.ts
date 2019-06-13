export function useFixtureFactory<T extends object>(defaultObject: T): (overrideObject?: Partial<T>) => T {
  return (overrideObject: Partial<T> = {}) => {
    return {
      ...(defaultObject as object),
      ...(overrideObject as object),
    } as T;
  };
}
