import { ISearchWeather } from "../../../../fetch/search-weather/model";
import { IWeather } from "../../models";
import { utcToDateTimeString } from "../../../../common/utils/date";

export const searchWeatherListTransformer = (weathers: ISearchWeather[]): IWeather[] => {
  return weathers.map(weather => searchWeatherTransformer(weather));
}

export const searchWeatherTransformer = (weather: ISearchWeather): IWeather => {
  return {
    city: {
      id: weather.id,
      name: weather.name,
      coord: {
        ...weather.coord
      },
      country: weather.sys.country
    },
    cnt: 1,
    list: [
      {
        dt: weather.dt,
        main: {
          ...weather.main
        },
        weather: [
          ...weather.weather,
        ],
        clouds: {
          ...weather.clouds
        },
        wind: {
          ...weather.wind,
        },
        dt_txt: utcToDateTimeString(weather.dt),
      }
    ]
  };
}
