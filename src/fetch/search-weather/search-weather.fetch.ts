import Axios from "axios";
import { IWeather } from "../../modules/weathers/models";
import { ISearchWeatherFetchResponse } from "./model";
import { searchWeatherListTransformer } from "../../modules/weathers/transformers";

export const searchWeatherFetch = async (query: string): Promise<IWeather[]> => {
  //qery must be minimum 3 characters long
  if(query.length < 3) {
    return [];
  };

  const { data } = await Axios.request<ISearchWeatherFetchResponse>({
    method: 'get',
    url: `${process.env.WEATHER_URL}/find`,
    params: {
      q: query,
      units: 'metric',
      appid: '{WEATHER_APPID}',
    }
  });

  return searchWeatherListTransformer(data.list);
};
