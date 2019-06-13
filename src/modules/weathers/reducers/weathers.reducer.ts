import { IWeather } from "../models";
import { WeatherApiActions } from "../actions";

export type State = {
  entries: { [id: number]: IWeather};
};

export const initialState: State = {
  entries: {},
};

export const reducer = (
  state = initialState,
  action: WeatherApiActions.WeatherApiActionsUnion
): State => {
  const mergeEntries = (state: State, weathers: IWeather[]): State => {
    const entities = weathers.reduce((saved, weather) => {
      return {
        ...saved,
        [weather.city.id]: weather
      };
    }, {});

    return {
      ...state,
      entries: {
        ...state.entries,
        ...entities,
      }
    };
  }

  switch(action.type) {

    case WeatherApiActions.LOAD_LIST_SUCCESS:
      return mergeEntries(state, action.weathers);

    case WeatherApiActions.LOAD_ONE_SUCCESS:
      return mergeEntries(state, [action.weather]);

    default: {
      return state;
    }
  }
}
