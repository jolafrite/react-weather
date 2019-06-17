import Axios from "axios";
import {
  IWeatherWind,
  IWeatherClouds,
  IWeatherMain,
  IWeatherWeather,
  IWeatherRain,
  IWeatherSnow
} from "../../models";

export interface ILoadWeatherFetchResponse {
  coord: {
    lon: number;
    lat: number;
  };
  weather: IWeatherWeather[];
  base: "stations";
  main: IWeatherMain;
  visibility: number;
  wind: IWeatherWind;
  clouds: IWeatherClouds;
  dt: number;
  sys: {
    type: number;
    id: number;
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  rain?: IWeatherRain | null;
  snow?: IWeatherSnow | null;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export const loadWeatherFetch = async (id: number) => {
  const { data } = await Axios.request<ILoadWeatherFetchResponse>({
    method: "get",
    url: `${process.env.WEATHER_URL}/weather`,
    params: {
      id,
      units: "metric",
      appid: "{WEATHER_APPID}"
    }
  });

  return data;
};
