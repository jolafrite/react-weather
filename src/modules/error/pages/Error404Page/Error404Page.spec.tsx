import React from 'react';
import { IError404PageProps, Error404Page } from "./Error404Page";
import { render, cleanup } from "@testing-library/react";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

afterEach(cleanup);

describe('page: Error404Page', () => {

  const createComponent = (values = {}) => {
    const props: IError404PageProps = {
      ...values,
    };

    const store = createStore(() => {});
    return render(
      <Provider
        store={store}
      >
        <Error404Page {...props} />
      </Provider>
    );
  };

  test('default render', () => {
    const component = createComponent();

    expect(
      component.container
    ).toMatchSnapshot();
  });

});
