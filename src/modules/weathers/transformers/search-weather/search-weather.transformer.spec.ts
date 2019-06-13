import { searchWeatherFixtures } from "../../models";
import { searchWeatherTransformer, searchWeatherListTransformer } from "./search-weather.transformer";

describe('searchWeatherTransformer', () => {

  test('should transform a search weather result to weather', () => {
    const weather = searchWeatherFixtures()

    expect(
      searchWeatherTransformer(weather)
    ).toMatchSnapshot();
  });

  test('should transform a list of search weather result to weather', () => {
    const weathers = [
      searchWeatherFixtures(),
      searchWeatherFixtures({ id: 1111 }),
    ];

    expect(
      searchWeatherListTransformer(weathers)
    ).toMatchSnapshot();
  });

});
