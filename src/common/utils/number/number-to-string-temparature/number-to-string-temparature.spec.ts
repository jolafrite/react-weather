import { numberToStringTemperature } from "./number-to-string-temparature";

describe('numberToStringTemperature', () => {

  test('should convert the number to a string <degree>° / <degree>F', () => {
    expect(
      numberToStringTemperature(20)
    ).toMatchSnapshot();
  });

  test('should round the temparatures', () => {
    expect(
      numberToStringTemperature(13.3333)
    ).toMatchSnapshot();
  });


});
