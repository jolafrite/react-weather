import { ActionType } from "../../../common/utils/redux";
import { IWeather, IWeatherForecast } from "../models";

export const SELECT_ONE = '[Weather View Page] Select Weather';
export const LOAD_ONE = '[Weather View Page] Load Weather';
export const LOAD_ONE_SUCCESS = '[Weather View Page] Load Weather Success';
export const LOAD_ONE_ERROR = '[Weather View Page] Load Weather Error';

export const selectOne = (id: number) => {
  return {
    type: SELECT_ONE,
    id,
  } as const;
};

export const loadOne = () => {
  return {
    type: LOAD_ONE,
  } as const;
};

export const loadOneSuccess = (weather: IWeather, forecasts?: IWeatherForecast[]) => {
  return {
    type: LOAD_ONE_SUCCESS,
    weather,
    forecasts,
  } as const;
};

export const loadOneError = (error: Error) => {
  return {
    type: LOAD_ONE_ERROR,
    error
  } as const;
};

const all = {
  selectOne,
  loadOne,
  loadOneSuccess,
  loadOneError,
};

export type WeatherViewPageActionsUnion = ActionType<typeof all>;
