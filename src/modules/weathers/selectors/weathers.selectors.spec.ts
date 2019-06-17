import {
  getWeatherEntitiesState,
  getWeatherEntities
} from "./weathers.selectors";
import { getWeathersState } from "../reducers";

describe('selectors: weather', () => {

  describe('getWeatherState', () => {
    test('should return the root state sub state weathers ', () => {
      const state = {
        router: {
          router: 'router state'
        },
        weathers: {
          weathers: 'weathers state'
        }
      };

      expect(
        getWeathersState(state as any)
      ).toMatchSnapshot();
    });
  });

  describe('getWeatherEntitiesState', () => {
    test('should return the weather entries state', () => {
      const state = {
        weathers: {
          'weathers': 'weathers state'
        }
      };

      expect(
        getWeatherEntitiesState(state as any)
      ).toMatchSnapshot();
    });
  });

  describe('getWeatherEntities', () => {
    test('should return the entries value', () => {
      const state = {
        weathers: {
          weathers: {
            entries: {
              1: { id: 1 },
              2: { id: 2 },
            }
          }
        }
      };

      expect(
        getWeatherEntities(state as any)
      ).toMatchSnapshot();
    });
  });

});
