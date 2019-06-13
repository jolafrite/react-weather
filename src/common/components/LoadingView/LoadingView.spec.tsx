import React from 'react';
import { cleanup, render } from "@testing-library/react";
import LoadingView, { ILoadingViewProps } from "./LoadingView";

jest.mock('../Layout', () => ({ children }: any) => <div className="Layout">{children}</div>);

describe('component: LoadingView', () => {

  const createComponent = (values = {}) => {
    const props: ILoadingViewProps = {
      ...values,
    };

    return render(
      <LoadingView
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
