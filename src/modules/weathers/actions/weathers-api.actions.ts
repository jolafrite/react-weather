import { IWeather } from "../models";
import { ActionType } from "../../../common/utils/redux";

export const LOAD_ONE_SUCCESS = '[Weather API] Load Weather Success';
export const LOAD_LIST_SUCCESS = '[Weather API] Load Weathers Success';

export const loadOneSuccess = (weather: IWeather) => {
  return {
    type: LOAD_ONE_SUCCESS,
    weather,
  } as const;
};

export const loadListSuccess = (weathers: IWeather[]) => {
  return  {
    type: LOAD_LIST_SUCCESS,
    weathers
  } as const;
};

const all = {
  loadOneSuccess,
  loadListSuccess,
};

export type WeatherApiActionsUnion = ActionType<typeof all>;
