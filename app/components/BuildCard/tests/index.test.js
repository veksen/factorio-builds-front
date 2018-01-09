import React from 'react';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';
import { shallow } from 'enzyme';

import LanguageProvider from 'containers/LanguageProvider';

import configureStore from '../../../configureStore';
import { translationMessages } from '../../../i18n';

import BuildCard from '../index';

describe('<BuildCard />', () => {
  let store;
  let build;
  let renderComponent;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  // Before each test reset the build data for safety
  beforeEach(() => {
    build = {
      _id: '2b77cac0966853b020ad7ddb8e0fcf12',
      name: '8-8 balancer',
      category: 'balancers',
    };
    renderComponent = () => shallow(
      <Provider store={store}>
        <LanguageProvider messages={translationMessages}>
          <BuildCard build={build} />
        </LanguageProvider>
      </Provider>
    ).dive();
  });

  it.skip('should be a div', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.type()).toEqual('div');
  });

  it.skip('should render the build name', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(<h4>{build.name}</h4>)).toEqual(true);
    // expect(renderedComponent.contains(childrenTwo)).toEqual(true);
  });
});
