import { useFixtureFactory } from "../../../common/utils/test";
import { IWeather } from "./model";
import { ISearchWeather } from "../../../fetch/search-weather/model";

export const weatherFixtures = useFixtureFactory<IWeather>({
  city: {
    id: 1851632,
    name: "Shuzenji",
    coord: { lon: 138.933334, lat: 34.966671 },
    country: "JP"
  },
  cnt: 38,
  list: [
    {
      dt: 1406106000,
      main: {
        temp: 298.77,
        temp_min: 298.77,
        temp_max: 298.774,
        pressure: 1005.93,
        sea_level: 1018.18,
        grnd_level: 1005.93,
        humidity: 87,
        temp_kf: 0.26
      },
      weather: [
        { id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" }
      ],
      clouds: { all: 88 },
      wind: { speed: 5.71, deg: 229.501 },
      dt_txt: "2014-07-23 09:00:00"
    }
  ]
});

export const searchWeatherFixtures = useFixtureFactory<ISearchWeather>({
  id: 2643743,
  name: "London",
  coord: { lat: 51.5085, lon: -0.1258 },
  main: {
    temp: 284.31,
    pressure: 1010,
    humidity: 87,
    temp_min: 283.15,
    temp_max: 285.93,
    sea_level: 1,
    grnd_level: 2,
    temp_kf: 3,
  },
  dt: 1560233226,
  wind: {
    speed: 1.5,
    deg: 150
  },
  sys: {
    country: "GB"
  },
  rain: {
    "1h": 3,
    "3h": 4,
  },
  snow: {
    "1h": 1,
    "3h": 2,
  },
  clouds: { all: 90 },
  weather: [
    { id: 500, main: "Rain", description: "light rain", icon: "10d" },
    { id: 701, main: "Mist", description: "mist", icon: "50d" }
  ]
});
