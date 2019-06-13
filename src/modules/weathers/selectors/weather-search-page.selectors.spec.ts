import {
  getSearchPageState,
  getSearchPageLoaded,
  getSearchPageLoading,
  getSearchPageError,
  getSearchPageWeatherIds,
  getSearchPageWeathers,
  getSearchPageQuery
} from "./weather-search-page.selectors";

describe('selectors: weather search page', () => {

  describe('getSearchPageState', () => {
    test('should return the weather searchPage state', () => {
      const state = {
        weathers: {
          searchPage: {
            'state': 'weathers searchPage'
          }
        }
      };

      expect(
        getSearchPageState(state as any)
      ).toMatchSnapshot();
    });
  });

  describe('getSearchPageLoaded', () => {
    test('should return if the status is loaded', () => {
      const state = {
        weathers: {
          searchPage: {
            status: 'loaded'
          }
        }
      };

      expect(
        getSearchPageLoaded(state as any)
      ).toMatchSnapshot();
    });
  });

  describe('getSearchPageLoading', () => {
    test('should return if the status is loading', () => {
      const state = {
        weathers: {
          searchPage: {
            status: 'loading'
          }
        }
      };

      expect(
        getSearchPageLoading(state as any)
      ).toMatchSnapshot();
    });
  });

  describe('getSearchPageError', () => {
    test('should return if the status is error', () => {
      const state = {
        weathers: {
          searchPage: {
            status: 'error'
          }
        }
      };

      expect(
        getSearchPageError(state as any)
      ).toMatchSnapshot();
    });
  });

  describe('getSearchPageWeatherIds', () => {
    test('should return the ids', () => {
      const state = {
        weathers: {
          searchPage: {
            ids: [1234, 4321]
          }
        }
      };

      expect(
        getSearchPageWeatherIds(state as any)
      ).toMatchSnapshot();
    });
  });

  describe('getSearchPageWeather', () => {
    test('should return the matching weathers', () => {
      const state = {
        weathers: {
          weathers: {
            entries: {
              1234: { id: 1234 },
              4321: { id: 4321 },
            }
          },
          searchPage: {
            ids: [1234, 4321]
          }
        }
      };

      expect(
        getSearchPageWeathers(state as any)
      ).toMatchSnapshot();
    });
  });

  describe('getSearchPageQuery', () => {
    test('should return the query', () => {
      const state = {
        weathers: {
          searchPage: {
            query: 'searched query'
          }
        }
      };

      expect(
        getSearchPageQuery(state as any)
      ).toMatchSnapshot();
    });
  });
});
