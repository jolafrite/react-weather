import { combineReducers } from "redux";
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from "history";
import * as FromWeathers from '../modules/weathers/reducers';

export type RootState = {
  readonly router: RouterState,
  readonly weathers: FromWeathers.State,
};

export const createRootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  weathers: FromWeathers.reducer,
});
