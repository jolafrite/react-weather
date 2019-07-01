import React from 'react';
import { render, cleanup  } from '@testing-library/react';
import Temperature, { ITemperatureProps } from './Temperature';

describe('component: Temperature', () => {

  afterEach(cleanup);

  const createComponent = (values = {}) => {
    const props: ITemperatureProps = {
      value: 30,
      direction: 'row',
      ...values,
    };

    return render(
      <Temperature
        {...props}
      />
    );
  };

  describe('row direction', () => {
    test('should render the Celcius and Fahrenheit on the same line', () => {
      const component = createComponent({
        direction: 'row',
      });

      expect(
        component.container
      ).toMatchSnapshot();
    });
  });



});
