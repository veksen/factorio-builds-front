import React from 'react';
import { shallow } from 'enzyme';

import FormWrapper from '../index';

describe('<FormWrapper />', () => {
  it('should be a div', () => {
    const renderedComponent = shallow(
      <FormWrapper label={'test label'}>
        content
      </FormWrapper>
    ).dive();
    expect(renderedComponent.type()).toEqual('div');
  });

  it('should render children', () => {
    const children = (<input type="text" />);
    const renderedComponent = shallow(
      <FormWrapper>
        {children}
      </FormWrapper>
    ).dive();
    expect(renderedComponent.contains(children)).toEqual(true);
  });

  it.skip('should render a label if passed as prop', () => {
    const children = (<input type="text" />);
    const renderedComponent = shallow(
      <FormWrapper label={'test label'}>
        {children}
      </FormWrapper>
    );
    expect(renderedComponent.find('label').length).toEqual(1);
    expect(renderedComponent.find('label').text()).toEqual('test label');
  });
});
