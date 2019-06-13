import React from 'react';
import { cleanup, render } from "@testing-library/react";
import ListItemWeather, { IListItemWeatherProps } from "./ListItemWeather";

describe('component: LoadingView', () => {

  const createComponent = (values = {}) => {
    const props: IListItemWeatherProps = {
      ...values,
      city: 'Hong Kong',
      country: 'CN',
      icon: '04d',
      temp: 30,
    };

    return render(
      <ListItemWeather
        {...props}
      />
    );
  };

  afterEach(cleanup);

  test('default render', () => {
    const component = createComponent();

    expect(
      component.container
    ).toMatchSnapshot();
  });

});
