import React from 'react';
import { shallow } from 'enzyme';

import LoadingIndicator from '../index';
import Wrapper from '../Wrapper';
import Circle from '../Circle';

describe('<LoadingIndicator />', () => {
  it('should render 1 Wrapper', () => {
    const renderedComponent = shallow(
      <LoadingIndicator />
    );
    expect(renderedComponent.find(Wrapper).length).toBe(1);
  });

  it('should render 12 Circles', () => {
    const renderedComponent = shallow(
      <LoadingIndicator />
    );
    expect(renderedComponent.find(Circle).length).toBe(12);
  });
});
