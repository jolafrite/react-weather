import React from "react";
import { render, cleanup } from "@testing-library/react";
import WeatherSearch, { IWeatherSearchProps } from "./WeatherSearch";
import { weatherFixture } from "../../models";

jest.mock("../../../../common/components/Layout", () => ({ children }: any) => (
  <div className="Layout">{children}</div>
));
jest.mock("../WeatherSearchForm", () => (props: any) =>
  <div className="WeatherSearchForm">{JSON.stringify(props)}</div>
);
jest.mock("../WeatherSearchResult", () => (props: any) =>
  <div className="WeatherSearchResult" data-testid="weatherSearchResult">{JSON.stringify(props)}</div>
);

describe("component: WeatherSearch", () => {
  afterEach(cleanup);

  const createComponent = (values = {}) => {
    const props: IWeatherSearchProps = {
      onSearchWeather: () => {},
      onWeatherClick: () => {},
      weathers: [],
      loaded: false,
      loading: false,
      error: false,
      ...values
    };

    return render(<WeatherSearch {...props} />);
  };

  test("render the component", () => {
    const { container } = createComponent();

    expect(container).toMatchSnapshot();
  });

  describe("weathers is set", () => {
    test("send the weathers to WeatherSearchResult", () => {
      const weathers = [weatherFixture(), weatherFixture({ id: 1 })];

      const { getByTestId } = createComponent({ weathers });
      const weatherSearchResult = getByTestId('weatherSearchResult')

      const weatherSearchResultProps = JSON.parse(weatherSearchResult.textContent as string);

      expect(
        weatherSearchResultProps.weathers.length
      ).toMatchSnapshot();
    });
  });

  // describe('error is set to true', () => {
  //   test('should show the error message', () => {
  //     const component = createComponent({ error: true });

  //     expect(
  //       component.container
  //     ).toMatchSnapshot();
  //   })
  // });

  // describe('result not found', () => {
  //   test('should show the no result found message', () => {
  //     const component = createComponent({ loaded: true });

  //     expect(
  //       component.container
  //     ).toMatchSnapshot();
  //   })
  // });
});
