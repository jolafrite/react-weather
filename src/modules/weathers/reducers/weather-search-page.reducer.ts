import { WeatherSearchPageActions } from '../actions';

export type State = {
  status: string;
  error: Error | null;
  ids: number[];
  query: string | null;
};

export const initialState: State = {
  status: 'pending',
  error: null,
  ids: [],
  query: null
};

export const reducer = (
  state = initialState,
  action: WeatherSearchPageActions.WeatherSearchPageActionsUnion
): State => {
  switch(action.type) {

    case WeatherSearchPageActions.RESET: {
      return initialState;
    }

    case WeatherSearchPageActions.SEARCH: {
      return {
        ...state,
        status: 'loading',
        query: action.query
      };
    }

    case WeatherSearchPageActions.SEARCH_SUCCESS: {
      return {
        ...state,
        status: 'loaded',
        ids: action.weathers.map(weather => weather.city.id),
        error: null,
      };
    }

    case WeatherSearchPageActions.SEARCH_ERROR: {
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
export const getIds = (state: State) => state.ids;
export const getQuery = (state: State) => state.query;
