import { combineReducers } from "redux";
import * as ForWeatherSearchPage from './weather-search-page.reducer';
import * as ForWeatherViewPage from './weather-view-page.reducer';
import * as ForWeathers from './weathers.reducer';
import * as ForForecasts from './forecasts.reducer';
import { RootState } from "../../../store";

export type State = {
  readonly weathers: ForWeathers.State,
  readonly forecasts: ForForecasts.State,
  readonly searchPage: ForWeatherSearchPage.State,
  readonly viewPage: ForWeatherViewPage.State,
};

export const reducer = combineReducers<State>({
  weathers: ForWeathers.reducer,
  forecasts: ForForecasts.reducer,
  searchPage: ForWeatherSearchPage.reducer,
  viewPage: ForWeatherViewPage.reducer,
});

export const getWeathersState = (state: RootState) => state.weathers;
