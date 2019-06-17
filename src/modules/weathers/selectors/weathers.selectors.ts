import { createSelector } from 'reselect';
import { getWeathersState } from '../reducers';

export const getWeatherEntitiesState = createSelector(
  [getWeathersState],
  state => state.weathers
);

export const getWeatherEntities = createSelector(
  [getWeatherEntitiesState],
  state => state.entries
);
