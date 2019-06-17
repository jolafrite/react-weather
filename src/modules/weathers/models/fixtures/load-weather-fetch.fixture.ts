import { useFixtureFactory } from "../../../../common/utils/test";
import { ILoadWeatherFetchResponse } from "../../fetch";

export const loadWeatherFetchResponseFixture = useFixtureFactory<
  ILoadWeatherFetchResponse
>({
  coord: { lon: -95.56, lat: 33.66 },
  weather: [
    { id: 501, main: "Rain", description: "moderate rain", icon: "10n" },
    { id: 701, main: "Mist", description: "mist", icon: "50n" }
  ],
  base: "stations",
  main: {
    temp: 20.69,
    pressure: 1014,
    humidity: 88,
    temp_min: 18,
    temp_max: 26
  },
  visibility: 9656,
  wind: { speed: 7.2, deg: 300, gust: 9.8 },
  rain: { "1h": 1.65 },
  clouds: { all: 90 },
  dt: 1560676515,
  sys: {
    type: 1,
    id: 5407,
    message: 0.0055,
    country: "US",
    sunrise: 1560683495,
    sunset: 1560735259
  },
  timezone: -18000,
  id: 4717560,
  name: "Paris",
  cod: 200
});
