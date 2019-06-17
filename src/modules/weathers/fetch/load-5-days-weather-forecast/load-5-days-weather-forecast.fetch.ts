import Axios from "axios";
import {
  IWeatherMain,
  IWeatherWind,
  IWeatherClouds,
  IWeatherWeather,
  IWeatherRain
} from "../../models";

export interface ILoad5DaysWeatherForecastFetchResponse {
  cod: string;
  message: number;
  cnt: number;
  list: {
    dt: number;
    main: IWeatherMain;
    weather: IWeatherWeather[];
    clouds: IWeatherClouds;
    wind: IWeatherWind;
    rain?: IWeatherRain;
    sys: {
      pod: string
    };
    dt_txt: string;
  }[];
  city: {
    id: number;
    name: string;
    coord: {
      lon: number;
      lat: number;
    };
    country: string;
    timezone: number;
  };
}

export const load5DaysWeatherForecastFetch = async (id: number) => {
  const { data } = await Axios.request<ILoad5DaysWeatherForecastFetchResponse>({
    method: "get",
    url: `${process.env.WEATHER_URL}/forecast`,
    params: {
      id,
      units: "metric",
      appid: "{WEATHER_APPID}"
    }
  });

  return data;
};
