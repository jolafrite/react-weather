import React from 'react';
import { render, cleanup  } from '@testing-library/react';
import WeatherSearch, { IWeatherSearchProps } from './WeatherSearch';
import { weatherFixtures } from '../../models';

jest.mock('../../../../common/components/Layout', () => ({ children }: any) => <div className="Layout">{children}</div>);
jest.mock('../WeatherSearchForm', () => () => <div className="WeatherSearchForm" />);
jest.mock('../Weather/ListItemWeather', () => () => <div className="ListItemWeather" />);

describe('component: WeatherSearch', () => {

  afterEach(cleanup);

  const createComponent = (values = {}) => {
    const props: IWeatherSearchProps = {
      onSearchWeather: () => {},
      onWeatherClick: () => {},
      weathers: [],
      loaded: false,
      loading: false,
      error: false,
      ...values,
    };

    return render(
      <WeatherSearch
        {...props}
      />
    );
  };

  describe('init', () => {
    test('should only render the form', () => {
      const component = createComponent();

      expect(
        component.container
      ).toMatchSnapshot();
    });
  });

  describe('list of weathers passed', () => {
    test('display the list', () => {
      const weathers = [
        weatherFixtures(),
        weatherFixtures({
          city: { id: 1 }
        })
      ];

      const component = createComponent({ weathers });

      expect(
        component.container
      ).toMatchSnapshot();
    });
  });

  describe('error is set to true', () => {
    test('should show the error message', () => {
      const component = createComponent({ error: true });

      expect(
        component.container
      ).toMatchSnapshot();
    })
  });

  describe('result not found', () => {
    test('should show the no result found message', () => {
      const component = createComponent({ loaded: true });

      expect(
        component.container
      ).toMatchSnapshot();
    })
  });

});
