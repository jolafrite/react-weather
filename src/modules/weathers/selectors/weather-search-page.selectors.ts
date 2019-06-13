import { createSelector } from "reselect";
import { getWeathersState, getWeatherEntities } from "./weathers.selectors";
import * as WeatherFromSearch from '../reducers/weather-search-page.reducer';

export const getSearchPageState = createSelector(
  [getWeathersState],
  state => state.searchPage
);

export const getSearchPageLoaded = createSelector(
  [getSearchPageState],
  WeatherFromSearch.getLoaded
);

export const getSearchPageLoading = createSelector(
  [getSearchPageState],
  WeatherFromSearch.getLoading
);

export const getSearchPageError = createSelector(
  [getSearchPageState],
  WeatherFromSearch.getError
);

export const getSearchPageWeatherIds = createSelector(
  [getSearchPageState],
  WeatherFromSearch.getIds
);

export const getSearchPageWeathers = createSelector(
  [getWeatherEntities, getSearchPageWeatherIds],
  (weathers, ids) => ids.map(id => weathers[id])
);

export const getSearchPageQuery = createSelector(
  [getSearchPageState],
  WeatherFromSearch.getQuery
);
