import { IWeather } from "../models";
import { ActionType } from "../../../common/utils/redux";

export const RESET = '[Weather Search Page] Reset Search Weather';
export const SEARCH = '[Weather Search Page] Search Weather';
export const SEARCH_SUCCESS = '[Weather Search Page] Search Weathers Success';
export const SEARCH_ERROR = '[Weather Search Page] Search Weathers Error';

export const reset = () => {
  return {
    type: RESET,
  } as const;
};

export const search = (query: string) => {
  return {
    type: SEARCH,
    query,
  } as const;
};

export const searchSuccess = (weathers: IWeather[]) => {
  return {
    type: SEARCH_SUCCESS,
    weathers,
  } as const;
};

export const searchError = (error: Error) => {
  return {
    type: SEARCH_ERROR,
    error
  } as const;
};

const all = {
  reset,
  search,
  searchSuccess,
  searchError,
};

export type WeatherSearchPageActionsUnion = ActionType<typeof all>;
