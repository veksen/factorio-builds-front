import React from 'react';
import { mount, shallow } from 'enzyme';

import FormWrapper from '../index';

describe('<FormWrapper />', () => {
  const children = (<input type="text" />);

  it('should be a div', () => {
    const renderedComponent = shallow(
      <FormWrapper label={'test label'}>
        {children}
      </FormWrapper>
    ).dive();
    expect(renderedComponent.type()).toEqual('div');
  });

  it('should render children', () => {
    const renderedComponent = shallow(
      <FormWrapper>
        {children}
      </FormWrapper>
    ).dive();
    expect(renderedComponent.contains(children)).toEqual(true);
  });

  it('should render a label if passed as prop', () => {
    const renderedComponent = mount(
      <FormWrapper label={'test label'}>
        {children}
      </FormWrapper>
    );
    expect(renderedComponent.find('label').length).toEqual(1);
    expect(renderedComponent.find('label').text()).toEqual('test label');
  });
});
