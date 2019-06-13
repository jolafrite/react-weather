import { reducer, initialState, getLoaded, getLoading, getError, getIds, getQuery } from "./weather-search-page.reducer";
import { WeatherSearchPageActions } from "../actions";
import { weatherFixtures } from "../models";

describe('reducer: Weather Search Page', () => {

  describe('action:', () => {

    describe('undefined', () => {
      test('should result the default state', () => {
        expect(
          reducer(undefined, {} as any)
        ).toMatchSnapshot();
      });
    });

    describe('SearchPageActions.reset', () => {
      test('should set the status to loading', () => {
        const state = {
          status: 'loaded',
          error: new Error('an error'),
          ids: [1, 2],
          query: 'search query',
        };

        expect(
          reducer(state, WeatherSearchPageActions.reset())
        ).toMatchSnapshot();
      });
    });

    describe('SearchPageActions.search', () => {
      test('should set the status to loading and store the query', () => {
        expect(
          reducer(undefined, WeatherSearchPageActions.search())
        ).toMatchSnapshot();
      });
    });

    describe('SearchPageActions.searchSuccess', () => {
      test('should set the status to loaded and store the ids', () => {
        const weathers = [
          weatherFixtures({ id: 1 }),
          weatherFixtures({ id: 2 }),
          weatherFixtures({ id: 3 }),
        ];

        expect(
          reducer(undefined, WeatherSearchPageActions.searchSuccess(weathers))
        ).toMatchSnapshot();
      });

      test('should reset the error', () => {
        const weathers = [
          weatherFixtures({ id: 1 }),
          weatherFixtures({ id: 2 }),
          weatherFixtures({ id: 3 }),
        ];
        const state =  {
          ...initialState,
          error: new Error('an error'),
        }

        expect(
          reducer(state, WeatherSearchPageActions.searchSuccess(weathers))
        ).toMatchSnapshot();
      });
    });

    describe('SearchPageActions.searchError', () => {
      test('should set the error', () => {
        const error = new Error('an error')

        expect(
          reducer(undefined, WeatherSearchPageActions.searchError(error))
        ).toMatchSnapshot();
      });
    });

  });

  describe('selector:', () => {

    describe('getLoaded', () => {
      test('should return if the status is set to loaded', () =>{
        const result = getLoaded({
          ...initialState,
          status: 'loaded'
        });

        expect(
          result
        ).toMatchSnapshot();
      });
    });

    describe('getLoading', () => {
      test('should return if the status is set to loading', () =>{
        const result = getLoading({
          ...initialState,
          status: 'loading'
        });

        expect(
          result
        ).toMatchSnapshot();
      });
    });

    describe('getError', () => {
      test('should return if the status is set to error', () =>{
        const result = getError({
          ...initialState,
          status: 'error'
        });

        expect(
          result
        ).toMatchSnapshot();
      });
    });

    describe('getIds', () => {
      test('should return the ids', () => {
        const result = getIds({
          ...initialState,
          ids: [111, 222]
        });

        expect(
          result
        ).toMatchSnapshot();
      });
    });

    describe('getQuery', () => {
      test('should return the query', () => {
        const result = getQuery({
          ...initialState,
          query: 'searched query'
        });

        expect(
          result
        ).toMatchSnapshot();
      });
    });

  });

});
