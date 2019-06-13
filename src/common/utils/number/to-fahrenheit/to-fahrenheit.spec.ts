import { toFahrenheit } from "./to-fahrenheit";

describe('toFahrenheit', () => {

  test('convert from degree celcius to fahrenheit', () => {
    expect(
      toFahrenheit(23)
    ).toMatchSnapshot()
  });

  test('convert a below 0 temperature', () => {
    expect(
      toFahrenheit(-10)
    ).toMatchSnapshot()
  });

});
