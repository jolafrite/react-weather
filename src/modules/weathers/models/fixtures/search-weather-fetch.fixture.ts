import { ISearchWeatherFetchResponse } from "../../fetch";
import { useFixtureFactory } from "../../../../common/utils/test";

export const searchWeatherFetchResponseFixture = useFixtureFactory<
  ISearchWeatherFetchResponse
>({
  message: "accurate",
  cod: "200",
  count: 5,
  list: [
    {
      id: 2988507,
      name: "Paris",
      coord: { lat: 48.8566, lon: 2.3515 },
      main: {
        temp: 18.23,
        pressure: 1021,
        humidity: 68,
        temp_min: 17,
        temp_max: 19.44
      },
      dt: 1560676148,
      wind: { speed: 3.1, deg: 190 },
      sys: { country: "FR" },
      rain: null,
      snow: null,
      clouds: { all: 75 },
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" }
      ]
    },
    {
      id: 4303602,
      name: "Paris",
      coord: { lat: 38.2098, lon: -84.253 },
      main: {
        temp: 22.85,
        pressure: 1012,
        humidity: 68,
        temp_min: 21.67,
        temp_max: 24
      },
      dt: 1560676306,
      wind: { speed: 4.6, deg: 220 },
      sys: { country: "US" },
      rain: null,
      snow: null,
      clouds: { all: 75 },
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04n" }
      ]
    },
    {
      id: 4717560,
      name: "Paris",
      coord: { lat: 33.6618, lon: -95.5556 },
      main: {
        temp: 20.76,
        pressure: 1014,
        humidity: 88,
        temp_min: 18,
        temp_max: 26
      },
      dt: 1560676307,
      wind: { speed: 7.2, deg: 300, gust: 9.8 },
      sys: { country: "US" },
      rain: { "1h": 1.65 },
      snow: null,
      clouds: { all: 90 },
      weather: [
        { id: 501, main: "Rain", description: "moderate rain", icon: "10n" },
        { id: 701, main: "Mist", description: "mist", icon: "50n" }
      ]
    },
    {
      id: 6942553,
      name: "Paris",
      coord: { lat: 43.1932, lon: -80.3843 },
      main: {
        temp: 12.6,
        pressure: 1010,
        humidity: 100,
        temp_min: 11.11,
        temp_max: 15
      },
      dt: 1560676307,
      wind: { speed: 2.6, deg: 60 },
      sys: { country: "CA" },
      rain: null,
      snow: null,
      clouds: { all: 40 },
      weather: [{ id: 701, main: "Mist", description: "mist", icon: "50n" }]
    },
    {
      id: 4647963,
      name: "Paris",
      coord: { lat: 36.302, lon: -88.3268 },
      main: {
        temp: 23.19,
        pressure: 1013,
        humidity: 78,
        temp_min: 22.22,
        temp_max: 24.44
      },
      dt: 1560676307,
      wind: { speed: 3.6, deg: 190 },
      sys: { country: "US" },
      rain: null,
      snow: null,
      clouds: { all: 75 },
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04n" }
      ]
    }
  ]
});
