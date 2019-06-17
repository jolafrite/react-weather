import { ActionType } from "../../../common/utils/redux";
import { IWeatherForecast } from "../models";

export const LOAD_ONE_SUCCESS = '[Forecast API] Load Forecast Success';

export const loadOneSuccess = (forecast: IWeatherForecast) => {
  return  {
    type: LOAD_ONE_SUCCESS,
    forecast
  } as const;
};

const all = {
  loadOneSuccess,
};

export type ForecastApiActionsUnion = ActionType<typeof all>;
