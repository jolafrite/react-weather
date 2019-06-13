export const mockFetch = (data: object) => {
  return jest.fn().mockReturnValue(
    Promise.resolve({
      ok: true,
      json: () => data
    })
  );
};
