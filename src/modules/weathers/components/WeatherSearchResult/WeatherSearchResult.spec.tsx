import { cleanup, render } from "@testing-library/react";
import WeatherSearchResult, { IWeatherSearchResultProps } from "./WeatherSearchResult";

describe('component: WeatherSearchResult', () => {

  afterEach(cleanup);

  const createComponent = (values = {}) => {
    const props: IWeatherSearchResultProps = {
      weathers: [],
      ...values,
    };

    return render(
      <WeatherSearchResult
        {...props}
      />
    );
  };

  test("render the component", () => {
    const component = createComponent();

    expect(
      component.container
    ).toMatchSnapshot();
  });

});
