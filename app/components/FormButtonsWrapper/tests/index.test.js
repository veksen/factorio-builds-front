import React from 'react';
import { shallow } from 'enzyme';

import FormButtonsWrapper from '../index';

const childrenOne = (<button>Test One</button>);
const childrenTwo = (<button>Test Two</button>);
const renderComponent = () => shallow(
  <FormButtonsWrapper>
    {childrenOne}
    {childrenTwo}
  </FormButtonsWrapper>
).dive();

describe('<FormButtonsWrapper />', () => {
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
