import { utcToDateTimeString } from "./utc-to-date-time-string";

describe('utcToDateTimeString', () => {

  test('convert a utc date to date time string', () => {
    expect(
      utcToDateTimeString(1560416400)
    ).toMatchSnapshot();
  });

  test('convert an other utc date to date time string', () => {
    expect(
      utcToDateTimeString(1560837600)
    ).toMatchSnapshot();
  });

});
