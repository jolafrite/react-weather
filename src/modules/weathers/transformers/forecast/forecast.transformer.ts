import { ILoad5DaysWeatherForecastFetchResponse } from "../../fetch";
import {
  IWeatherDailyForecast,
  IWeatherForecast,
  IWeatherForecastDetails
} from "../../models";
import { pick } from "../../../../common/utils/object";
import { utcToDateTimeString } from "../../../../common/utils/date";

const hourForecastTransformer = (data: any): IWeatherForecastDetails => {
  return {
    ...pick(data, ["main", "weather", "wind"]),
    weather: data.weather && data.weather[0],
    period: data.time
  };
};

export const load5DaysWeatherForecastTransformer = (
  data: ILoad5DaysWeatherForecastFetchResponse
): IWeatherForecast => {
  const response = data.list.reduce(
    (saved, item) => {
      const dt_txt = utcToDateTimeString(item.dt);
      const [date, time] = dt_txt;

      return {
        ...saved,
        [date]: {
          ...saved[date],
          [time]: hourForecastTransformer({ ...item, time })
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
