import { createSelector } from "reselect";
import { getWeathersState, getWeatherEntities } from "./weathers.selectors";
import * as WeatherFromView from "../reducers/weather-view-page.reducer";
import { IWeatherLast5DaysForecast, IWeatherDailyForecast, IWeatherViewPageContent, IWeatherList } from "../models";

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

    //helper to update the current date with the new hour info
    const addTimeForecastToDate = (dateRecord: IWeatherDailyForecast, hour: string, newRecord: IWeatherList) => {
      const temp_max = !dateRecord.temp_max
        ? newRecord.main.temp
        : Math.max(dateRecord.temp_max, newRecord.main.temp);

      const temp_min = !dateRecord.temp_min
        ? newRecord.main.temp
        : Math.min(dateRecord.temp_min, newRecord.main.temp);

      return {
        temp: dateRecord.temp + newRecord.main.temp,
        temp_max,
        temp_min,
        hourly: {
          ...dateRecord.hourly,
          [hour]: {
            temp: newRecord.main.temp,
            temp_max: newRecord.main.temp_max,
            temp_min: newRecord.main.temp_min,
          }
        }
      };
    }

    const calculateTemp = (day: IWeatherDailyForecast) => {
      return Number((day.temp / (Object.keys(day.hourly).length)).toFixed(2));
    };

    if (!weather) return null;

    let previousDate: string;

    return weather.list.reduce((saved, item, index) => {
      const [date, hour] = item.dt_txt.split(" ");

      const currentDate = saved[date] || {
        temp: null,
        temp_max: null,
        temp_min: null,
        hourly: {}
      };

      let result = {
        ...saved,
        [date]: addTimeForecastToDate(currentDate, hour, item)
      }

      //calcute the previous date temp
      // as we now moved to a new day
      if (previousDate && previousDate !== date) {
        result = {
          ...result,
          [previousDate]: {
            ...result[previousDate],
            temp: calculateTemp(result[previousDate])
          }
        };
      }

      // calcutate the curremt day's temp
      // as there is no more record in the list
      if (index === weather.list.length - 1) {
        result = {
          ...result,
          [date]: {
            ...result[date],
            temp: calculateTemp(result[date])
          }
        };
      }

      previousDate = date;

      return result;
    }, {} as IWeatherLast5DaysForecast);
  }
);


export const getViewPageContent = createSelector(
  [getViewPageWeather, getViewLast5DaysForecast],
  (weather, forecast): IWeatherViewPageContent | null => {
    if (!weather || !forecast) {
      return null;
    }

    return {
      city: weather.city.name,
      country: weather.city.country,
      forecast
    };
  }
);
