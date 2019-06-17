import { createSelector } from 'reselect';
import { getWeathersState } from '../reducers';

export const getForecastEntitiesState = createSelector(
  [getWeathersState],
  state => state.forecasts
);

export const getForecastEntities = createSelector(
  [getForecastEntitiesState],
  state => state.entries
);
