import Axios from "axios";
import {
  IWeatherMain,
  IWeatherWind,
  IWeatherRain,
  IWeatherSnow,
  IWeatherClouds,
  IWeatherWeather
} from "../../models";

export interface ISearchWeatherFetchResponse {
  message: string;
  cod: string;
  count: number;
  list: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    main: IWeatherMain;
    dt: number;
    wind: IWeatherWind;
    sys: {
      country: string;
    };
    rain?: IWeatherRain | null;
    snow?: IWeatherSnow | null;
    clouds: IWeatherClouds;
    weather: IWeatherWeather[];
  }[];
}

export const searchWeatherFetch = async (query: string) => {
  const { data } = await Axios.request<ISearchWeatherFetchResponse>({
    method: "get",
    url: `${process.env.WEATHER_URL}/find`,
    params: {
      q: query,
      units: "metric",
      appid: "{WEATHER_APPID}"
    }
  });

  return data;
};
