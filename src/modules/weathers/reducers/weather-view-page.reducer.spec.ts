import { reducer, getError, getLoading, getId } from "./weather-view-page.reducer";
import { WeatherViewPageActions } from "../actions";
import { weatherFixtures } from "../models";
import { getLoaded, initialState } from "./weather-view-page.reducer";

describe('reducer: Weather View Page', () => {

  describe('action:', () => {

    describe('undefined', () => {
      test('should result the default state', () => {
        expect(
          reducer(undefined, {} as any)
        ).toMatchSnapshot();
      });
    });

    describe('ViewPageActions.selectOne', () => {
      test('should reset set state', () => {
        const state = {
          ...initialState,
          status: 'success',
          error: new Error('an error')
        };

        expect(
          reducer(state, WeatherViewPageActions.selectOne(1))
        ).toMatchSnapshot();
      });

      test('should set the id', () => {
        expect(
          reducer(undefined, WeatherViewPageActions.selectOne(1))
        ).toMatchSnapshot();
      });
    });

    describe('ViewPageActions.loadOne', () => {
      test('should set the status to loading', () => {
        expect(
          reducer(undefined, WeatherViewPageActions.loadOne())
        ).toMatchSnapshot();
      });
    });

    describe('ViewPageActions.loadOneSuccess', () => {
      test('should set the status to loaded and store the id', () => {
        const weather = weatherFixtures({ id: 1 });

        expect(
          reducer(undefined, WeatherViewPageActions.loadOneSuccess(weather))
        ).toMatchSnapshot();
      });

      test('should reset the error', () => {
        const weather = weatherFixtures({ id: 1 });
        const state = {
          ...initialState,
          error: new Error('an error')
        };

        expect(
          reducer(state, WeatherViewPageActions.loadOneSuccess(weather))
        ).toMatchSnapshot();
      });
    });

    describe('ViewPageActions.loadOneError', () => {
      test('should set the error', () => {
        const error = new Error('an error')

        expect(
          reducer(undefined, WeatherViewPageActions.loadOneError(error))
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

    describe('getId', () => {
      test('should return the id', () => {
        const result = getId({
          ...initialState,
          id: 111
        });

        expect(
          result
        ).toMatchSnapshot();
      });
    });

  });

});
