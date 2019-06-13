import { chunkArray } from "./chunk-array";

describe('chunkArray', () => {

  test('array length lower than size', () => {
    const array = Array.from(Array(6).keys());

    expect(
      chunkArray(array, 6)
    ).toMatchSnapshot();
  });

  test('array can be split evenly', () => {
    const array = Array.from(Array(6).keys());

    expect(
      chunkArray(array, 3)
    ).toMatchSnapshot();
  });

  test('array cant be split evenly', () => {
    const array = Array.from(Array(6).keys());

    expect(
      chunkArray(array, 4)
    ).toMatchSnapshot();
  });

});
