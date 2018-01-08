import React from 'react';
import { shallow } from 'enzyme';

import PageWrapper from '../index';

const childrenOne = (<h1>Test One</h1>);
const childrenTwo = (<div>Test Two</div>);
const renderComponent = () => shallow(
  <PageWrapper>
    {childrenOne}
    {childrenTwo}
  </PageWrapper>
).dive();

describe('<PageWrapper />', () => {
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
