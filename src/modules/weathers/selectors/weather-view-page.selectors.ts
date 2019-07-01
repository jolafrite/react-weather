import { createSelector } from "reselect";
import { getWeatherEntities } from "./weathers.selectors";
import { getForecastEntities } from "./forecasts.selector";
import * as WeatherFromView from "../reducers/weather-view-page.reducer";
import { getWeathersState } from "../reducers";
import { pick } from "../../../common/utils/object";
import { IWeatherDailyForecast, IWeatherPredictedDaysForecast, IWeatherForecastDetails } from "../models";
import { predictDayForecast } from "../utils";

export const getViewPageState = createSelector(
  [getWeathersState],
  state => state.viewPage
);

export const getViewPageLoaded = createSelector(
  [getViewPageState],
  WeatherFromView.getLoaded
);

export const getViewPageLoading = createSelector(
  [getViewPageState],
  WeatherFromView.getLoading
);

export const getViewPageError = createSelector(
  [getViewPageState],
  WeatherFromView.getError
);

export const getViewPageId = createSelector(
  [getViewPageState],
  WeatherFromView.getId
);

export const getViewPageWeather = createSelector(
  [getWeatherEntities, getViewPageId],
  (weathers, id) => {
    if(!weathers || !id) return;
    return weathers[id];
  }
);

export const getViewPageForecast = createSelector(
  [getForecastEntities, getViewPageId],
  (forecasts, id) => {
    if(!forecasts || !id) return;
    return forecasts[id];
  }
);

export const getViewPageTodayHourlyForecast = createSelector(
  [getViewPageWeather, getViewPageForecast],
  (weather, forecasts) => {
    return weather && forecasts && forecasts[weather.date];
  }
);

export const getViewPageNextDaysHourlyForecast = createSelector(
  [getViewPageWeather, getViewPageForecast],
  (weather, forecasts) => {
    if (!weather || !forecasts) return;

    const dates = Object.keys(forecasts);
    const todayIndex = dates.indexOf(weather.date);

    if (todayIndex === -1) return;

    //get only the next 4 days forecast
    const nextDaysForecast = dates.slice(todayIndex + 1, 5);

    return pick(forecasts, nextDaysForecast) as IWeatherDailyForecast;
  }
);

export const getViewPageNextDaysForecast = createSelector(
  [getViewPageNextDaysHourlyForecast],
  (forecasts): IWeatherPredictedDaysForecast | undefined => {
    if (!forecasts) return;

    const result = Object.keys(forecasts).reduce((saved, date) => {
      const prediction = predictDayForecast(forecasts[date]);

      return {
        ...saved,
        [date]: {
          period: date,
          main: {
            ...pick(prediction, ['temp', 'temp_max', 'temp_min']),
          },
          weather: {
            ...prediction.weather
          }
        }
      } as IWeatherForecastDetails;
    }, {});

    return result;
  }
);
