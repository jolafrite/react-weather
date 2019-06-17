import { load5DaysWeatherForecastFetchResponseFixture } from "../../models";
import { load5DaysWeatherForecastTransformer } from "./forecast.transformer";

describe("transformer: Forecast", () => {
  describe("load5DaysWeatherForecastTransformer", () => {
    test("should convert the response into a list of IWeather", () => {
      const fixture = load5DaysWeatherForecastFetchResponseFixture();

      expect(load5DaysWeatherForecastTransformer(fixture)).toMatchSnapshot();
    });
  });

});
