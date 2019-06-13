import React from 'react';
import WeatherSearchForm, { IWeatherSearchFormProps } from "./WeatherSearchForm";
import {render, cleanup, fireEvent} from '@testing-library/react';

describe('component: WeatherSearchForm', () => {

  const createComponent = (values = {}) => {
    const props: IWeatherSearchFormProps = {
      loading: false,
      onSubmit: () => {},
      ...values,
    };

    return render(
      <WeatherSearchForm
        {...props}
      />
    );
  };

  afterEach(cleanup);

  describe('init', () => {
    test('should only render the form', () => {
      const component = createComponent();

      expect(
        component.container
      ).toMatchSnapshot();
    });
  });

  describe('set a value into the input', () => {
    test('should enable the button', () => {
      const component = createComponent();

      const input = component.getByPlaceholderText("Enter the city name");
      fireEvent.change(input, { target: { value: 'Paris' } })

      expect(
        component.container
      ).toMatchSnapshot();
    });
  });

  describe('loading is set to true', () => {
    test('should disable the button and replace the icon with a spinner', () => {
      const component = createComponent({ loading: true });

      expect(
        component.container
      ).toMatchSnapshot();
    })
  });

});
