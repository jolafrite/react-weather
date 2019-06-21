import React from "react";
import WeatherSearchForm, {
  IWeatherSearchFormProps
} from "./WeatherSearchForm";
import {
  render,
  cleanup,
  fireEvent,
} from "@testing-library/react";

describe("component: WeatherSearchForm", () => {
  const createComponent = (values = {}) => {
    const props: IWeatherSearchFormProps = {
      loading: false,
      onSubmit: jest.fn(),
      ...values
    };

    const component = render(<WeatherSearchForm {...props} />);

    return {
      ...component,
      form: component.getByTestId("form"),
      input: component.getByTestId('input').querySelectorAll('input')[0],
      submit: component.getByTestId('submit'),
    };
  };

  afterEach(cleanup);

  test("render the component", () => {
    const { container } = createComponent();

    expect(container).toMatchSnapshot();
  });

  describe("enter a valid value", () => {
    const tests: { [field:string]: string } = {
      "paris": "paris",
      "par": "par"
    };

    Object.keys(tests).map(name => {
      describe(`\`${name}\``, () => {
        test('should enable the form and the button', () => {
          const onSubmit = jest.fn();
          const { input, submit, form } = createComponent({ onSubmit });

          fireEvent.change(input, { target: { value: tests[name] } });
          fireEvent.submit(form);

          expect(input.value).toMatchSnapshot();
          expect(submit.hasAttribute('disabled')).toMatchSnapshot();
          expect(onSubmit.mock.calls).toMatchSnapshot();
        });
      });
    });
  });

  describe("enter an invalid value", () => {
    const tests: { [field:string]: string } = {
      empty: "",
      p: "p",
      pa: "pa",
      'white space': " ",
      'white space prefix': " pa",
      'white space suffix': "pa ",
    };

    Object.keys(tests).map(name => {
      describe(`\`${name}\``, () => {
        test("should disable the form and the button", () => {
          const onSubmit = jest.fn();
          const { input, submit, form } = createComponent({ onSubmit });

          fireEvent.change(input, { target: { value: tests[name] } });
          fireEvent.submit(form);

          expect(input.value).toMatchSnapshot();
          expect(submit.hasAttribute('disabled')).toMatchSnapshot();
          expect(onSubmit.mock.calls).toMatchSnapshot();
        });
      });
    });
  });

  describe("loading set to true", () => {
    test("should disable the button and replace the icon with a spinner", () => {
      const { submit } = createComponent({ loading: true });

      expect(submit).toMatchSnapshot();
      expect(submit.hasAttribute('disabled')).toMatchSnapshot();
    });
  });
});
