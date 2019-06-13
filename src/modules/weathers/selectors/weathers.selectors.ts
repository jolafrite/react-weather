import { createSelector } from 'reselect';
import { RootState } from '../../../store';

export const getWeathersState = (state: RootState) => state.weathers;

export const getWeatherEntitiesState = createSelector(
  getWeathersState,
  state => state.weathers
);

export const getWeatherEntities = createSelector(
  [getWeatherEntitiesState],
  state => state.entries
);
