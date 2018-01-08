import React from 'react';
import { shallow } from 'enzyme';

import Content from '../index';

const childrenOne = (<h1>Test One</h1>);
const childrenTwo = (<div>Test Two</div>);
const renderComponent = () => shallow(
  <Content>
    {childrenOne}
    {childrenTwo}
  </Content>
).dive();

describe('<Content />', () => {
  it('should be a div', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.type()).toEqual('div');
  });

  it('should render children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(childrenOne)).toEqual(true);
    expect(renderedComponent.contains(childrenTwo)).toEqual(true);
  });
});
