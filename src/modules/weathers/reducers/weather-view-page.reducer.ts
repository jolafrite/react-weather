import { WeatherViewPageActions } from '../actions';

export type State = {
  status: string;
  error: Error | null;
  id: number | null;
};

export const initialState: State = {
  status: 'pending',
  error: null,
  id: null,
};

export const reducer = (
  state = initialState,
  action: WeatherViewPageActions.WeatherViewPageActionsUnion
): State => {
  switch(action.type) {

    case WeatherViewPageActions.SELECT_ONE: {
      return {
        ...initialState,
        id: action.id
      };
    }

    case WeatherViewPageActions.LOAD_ONE: {
      return {
        ...state,
        status: 'loading',
      };
    }

    case WeatherViewPageActions.LOAD_ONE_SUCCESS: {
      return {
        ...state,
        status: 'loaded',
        id: action.weather.id,
        error: null,
      };
    }

    case WeatherViewPageActions.LOAD_ONE_ERROR: {
      return {
        ...state,
        status: 'error',
        error: action.error,
      };
    }

    default: {
      return state;
    }
  };
};

export const getLoaded = (state: State) => state.status === 'loaded';
export const getLoading = (state: State) => state.status === 'loading' ;
export const getError = (state: State) => state.status === 'error';
export const getId = (state: State) => state.id;
