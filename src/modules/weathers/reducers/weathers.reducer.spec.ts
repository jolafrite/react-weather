import { reducer, State } from "./weathers.reducer";
import { WeatherApiActions } from "../actions";
import { weatherFixtures } from "../models";

describe('Weathers reducer', () => {

  describe('action: undefined', () => {
    test('should result the default state', () => {
      expect(
        reducer(undefined, {} as any)
      ).toMatchSnapshot();
    });
  });

  describe('action: WeatherApiActions.LoadListSuccess', () => {
    test('should save the weathers', () => {
      const weathers = [
        weatherFixtures({ id: 1 }),
        weatherFixtures({ id: 2 }),
      ];

      expect(
        reducer(undefined, WeatherApiActions.loadListSuccess(weathers))
      ).toMatchSnapshot();
    });

    test('should replace the existing weathers', () => {
      const state: State = {
        entries: {
          1: weatherFixtures({ id: 1 }),
        }
      };
      const weathers = [
        weatherFixtures({ id: 1, name: 'A new name' }),
      ];

      expect(
        reducer(state, WeatherApiActions.loadListSuccess(weathers))
      ).toMatchSnapshot();
    });
  });

  describe('action: WeatherApiActions.LoadOneSuccess', () => {
    test('should save the weather', () => {
      const weather = weatherFixtures({ id: 1 });

      expect(
        reducer(undefined, WeatherApiActions.loadOneSuccess(weather))
      ).toMatchSnapshot();
    });
  });

});

