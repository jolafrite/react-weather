import { pick } from "../../../../common/utils/object";
import { utcToDateTimeString } from "../../../../common/utils/date";
import { IWeather } from "../../models";
import { ILoadWeatherFetchResponse, ISearchWeatherFetchResponse } from "../../fetch";

const weathersTransformer = (data: any): IWeather[] => {
  return data.map((row: any) => weatherTransformer(row));
};

const weatherTransformer = (data: any): IWeather => {
  const dt_txt = data.dt && utcToDateTimeString(data.dt);
  const [date, time] = dt_txt.split(' ');

  return {
    ...pick(data, ["id", "name", "dt", "main", "wind"]),
    country: data.sys && data.sys.country,
    weather: data.weather && data.weather[0],
    dt_txt,
    date,
    time,
  };
};

export const searchWeatherFetchResponseTransformer = (response: ISearchWeatherFetchResponse): IWeather[] => {
  return weathersTransformer(response.list);
}

export const loadWeatherFetchResponseTransformer = (response: ILoadWeatherFetchResponse): IWeather => {
  return weatherTransformer(response);
}
