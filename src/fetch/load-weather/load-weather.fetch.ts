import Axios from "axios";
import { IWeather } from "../../modules/weathers/models";

export const loadWeatherFetch = async (id: number): Promise<IWeather> => {
  const { data } = await Axios.request({
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
