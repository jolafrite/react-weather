import { combineReducers } from "redux";
import * as ForWeatherSearchPage from './weather-search-page.reducer';
import * as ForWeatherViewPage from './weather-view-page.reducer';
import * as ForWeathers from './weathers.reducer';

export type State = {
  readonly weathers: ForWeathers.State,
  readonly searchPage: ForWeatherSearchPage.State,
  readonly viewPage: ForWeatherViewPage.State,
};

export const reducer = combineReducers<State>({
  weathers: ForWeathers.reducer,
  searchPage: ForWeatherSearchPage.reducer,
  viewPage: ForWeatherViewPage.reducer,
});
