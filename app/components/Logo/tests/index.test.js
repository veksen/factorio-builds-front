import React from 'react';
import { mount } from 'enzyme';

import Logo from '../index';

const children = (<h1>Test</h1>);
const renderComponent = () => mount(
  <Logo>
    {children}
  </Logo>
);

describe('<Logo />', () => {
  it('should be a svg', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('svg').length).toEqual(1);
  });

  it('should not render children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(false);
  });
});
