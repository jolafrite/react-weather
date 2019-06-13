import { createSelector } from "reselect";
import { getWeathersState, getWeatherEntities } from "./weathers.selectors";
import * as WeatherFromView from "../reducers/weather-view-page.reducer";
import { IWeatherLast5DaysForecast, IWeatherDailyForecast } from "../models";

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

export const getViewPageWeatherId = createSelector(
  [getViewPageState],
  WeatherFromView.getId
);

export const getViewPageWeather = createSelector(
  [getWeatherEntities, getViewPageWeatherId],
  (weathers, id) => id && weathers[id]
);

/**
 * Calculate the last 5 days forecast (temp/temp_max/temp_min)
 *
 * temp: average of the temperatures of the date
 * temp_max: highest temp of the day
 * temp_min: lowest temp of the day
 */
export const getViewLast5DaysForecast = createSelector(
  [getViewPageWeather],
  (weather): IWeatherLast5DaysForecast | null => {
    const calculateTemp = (day: IWeatherDailyForecast) => {
      return day.temp / Object.keys(day.hourly).length;
    };

    if (!weather) return null;

    let result: IWeatherLast5DaysForecast = {};
    let previousDate: string;

    weather.list.map(item => {
      const [date, hour] = item.dt_txt.split(" ");

      if (previousDate && previousDate !== date) {
        // calcutate the previous day's temp
        // this is done here instead of a new loop to keep it O(n)
        result = {
          ...result,
          [previousDate]: {
            ...result[previousDate],
            temp: calculateTemp(result[previousDate])
          }
        };
      }

      const currentDate = result[date] || {
        temp: null,
        temp_max: null,
        temp_min: null,
        hourly: {}
      };

      const temp_max = !currentDate.temp_max
        ? item.main.temp
        : Math.max(currentDate.temp_max, item.main.temp);

      const temp_min = !currentDate.temp_min
        ? item.main.temp
        : Math.min(currentDate.temp_min, item.main.temp);

      result = {
        ...result,
        [date]: {
          temp: currentDate.temp + item.main.temp,
          temp_max,
          temp_min,
          hourly: {
            ...currentDate.hourly,
            [hour]: item
          }
        }
      };

      previousDate = date;
    });

    return result;
  }
);

export const getViewPageContent = createSelector(
  [getViewPageWeather, getViewLast5DaysForecast],
  (weather, forecast) => {
    if (!weather || !forecast) {
      return null;
    }

    return {
      city: weather.city.name,
      country: weather.city.country,
      ...forecast
    };
  }
);
