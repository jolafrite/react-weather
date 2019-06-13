import { range } from "./range";

describe('range', () => {

  test('range 1 to 10', () => {
    expect(
      range(1, 10)
    ).toMatchSnapshot();
  });

  test('delta 2', () => {
    expect(
      range(1, 10, 2)
    ).toMatchSnapshot();
  });

});
