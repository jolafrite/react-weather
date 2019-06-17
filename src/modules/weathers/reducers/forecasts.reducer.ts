import { IWeatherForecast, IWeatherDailyForecast } from '../models';
import { ForecastApiActions } from "../actions";

export type State = {
  entries: {
    [id: number]: IWeatherDailyForecast
  };
};

export const initialState: State = {
  entries: {},
};

export const reducer = (
  state = initialState,
  action: ForecastApiActions.ForecastApiActionsUnion
): State => {
  const mergeEntries = (state: State, forecasts: IWeatherForecast[]): State => {
    const entities = forecasts.reduce((saved, forecast) => {
      return {
        ...saved,
        [forecast.id]: forecast.forecast
      };
    }, {});

    return {
      ...state,
      entries: {
        ...state.entries,
        ...entities,
      }
    };
  };

  switch(action.type) {
    case ForecastApiActions.LOAD_ONE_SUCCESS:
      return mergeEntries(state, [action.forecast]);

    default: {
      return state;
    }
  }
}
