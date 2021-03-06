import React from 'react';
import { shallow } from 'enzyme';

import Search from '../index';

const childrenOne = (<h1>Test One</h1>);
const childrenTwo = (<div>Test Two</div>);
const renderComponent = () => shallow(
  <Search>
    {childrenOne}
    {childrenTwo}
  </Search>
).dive();

describe('<Search />', () => {
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
