import { ILoad5DaysWeatherForecastFetchResponse } from "../../fetch";
import {
  IWeatherDailyForecast,
  IWeatherForecast,
  IWeatherForecastDetails
} from "../../models";
import { pick } from "../../../../common/utils/object";

const hourForecastTransformer = (data: any): IWeatherForecastDetails => {
  const [date, time] = data.dt_txt.split(" ");

  return {
    ...pick(data, ["main", "weather", "wind"]),
    weather: data.weather && data.weather[0],
    period: time,
  };
};

export const load5DaysWeatherForecastTransformer = (
  data: ILoad5DaysWeatherForecastFetchResponse
): IWeatherForecast => {
  const response = data.list.reduce(
    (saved, item) => {
      const [date, hour] = item.dt_txt.split(" ");

      return {
        ...saved,
        [date]: {
          ...saved[date],
          [hour]: hourForecastTransformer(item)
        }
      };
    },
    {} as IWeatherDailyForecast
  );

  return {
    id: data.city.id,
    forecast: response
  };
};
