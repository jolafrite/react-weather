import {
  searchWeatherFetchResponseTransformer,
  loadWeatherFetchResponseTransformer
} from "./weather.transformer";
import {
  searchWeatherFetchResponseFixture,
  loadWeatherFetchResponseFixture
} from "../../models";

describe("transformer: Weather", () => {
  describe("searchWeatherFetchResponseTransformer", () => {
    test("should convert the response into a list of IWeather", () => {
      const fixture = searchWeatherFetchResponseFixture();

      expect(searchWeatherFetchResponseTransformer(fixture)).toMatchSnapshot();
    });
  });

  describe("loadWeatherFetchResponseTransformer", () => {
    test("should convert the response into a IWeather", () => {
      const fixture = loadWeatherFetchResponseFixture();

      expect(loadWeatherFetchResponseTransformer(fixture)).toMatchSnapshot();
    });
  });
});
