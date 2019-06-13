import {
  getViewPageState,
  getViewPageLoaded,
  getViewPageLoading,
  getViewPageError,
  getViewPageWeatherId,
  getViewPageWeather,
  getViewLast5DaysForecast
} from "./weather-view-page.selectors";
import { weatherFixtures } from "../models";

describe('selectors: weather view page', () => {

  describe('getViewPageState', () => {
    test('should return the weather viewPage state', () => {
      const state = {
        weathers: {
          viewPage: {
            'state': 'weathers viewPage'
          }
        }
      };

      expect(
        getViewPageState(state as any)
      ).toMatchSnapshot();
    });
  });

  describe('getViewPageLoaded', () => {
    test('should return if the status is loaded', () => {
      const state = {
        weathers: {
          viewPage: {
            status: 'loaded'
          }
        }
      };

      expect(
        getViewPageLoaded(state as any)
      ).toMatchSnapshot();
    });
  });

  describe('getViewPageLoading', () => {
    test('should return if the status is loading', () => {
      const state = {
        weathers: {
          viewPage: {
            status: 'loading'
          }
        }
      };

      expect(
        getViewPageLoading(state as any)
      ).toMatchSnapshot();
    });
  });

  describe('getViewPageError', () => {
    test('should return if the status is error', () => {
      const state = {
        weathers: {
          viewPage: {
            status: 'error'
          }
        }
      };

      expect(
        getViewPageError(state as any)
      ).toMatchSnapshot();
    });
  });

  describe('getViewPageWeatherId', () => {
    test('should return the id', () => {
      const state = {
        weathers: {
          viewPage: {
            id: 1234
          }
        }
      };

      expect(
        getViewPageWeatherId(state as any)
      ).toMatchSnapshot();
    });
  });

  describe('getViewPageWeather', () => {
    test('should return the matching weather', () => {
      const state = {
        weathers: {
          weathers: {
            entries: {
              1234: { id: 1234 }
            }
          },
          viewPage: {
            id: 1234
          }
        }
      };

      expect(
        getViewPageWeather(state as any)
      ).toMatchSnapshot();
    });
  });

  describe('getViewLast5DaysForecast', () => {
    test('should return the min_temp max_temp and the average temp of the day', () => {
      const state = {
        weathers: {
          weathers: {
            entries: {
              1234: weatherFixtures({
                city: {
                  id: 1234,
                  name: 'Hong Kong',
                  country: 'CN',
                },
                list: [
                  { dt_txt: "2014-07-23 09:00:00", main: { temp: 21 }},
                  { dt_txt: "2014-07-23 10:00:00", main: { temp: 17 }},
                  { dt_txt: "2014-07-23 11:00:00", main: { temp: 23 }},
                  { dt_txt: "2014-07-24 09:00:00", main: { temp: -10 }},
                  { dt_txt: "2014-07-24 10:00:00", main: { temp: 5 }},
                  { dt_txt: "2014-07-24 11:00:00", main: { temp: -3 }},
                ]
              })
            }
          },
          viewPage: {
            id: 1234
          }
        }
      };

      expect(
        getViewLast5DaysForecast(state as any)
      ).toMatchSnapshot();
    });
  });

});
