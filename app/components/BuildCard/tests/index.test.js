import React from 'react';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';
import { shallow, mount } from 'enzyme';

import LanguageProvider from 'containers/LanguageProvider';

import configureStore from '../../../configureStore';
import { translationMessages } from '../../../i18n';

import { BuildCard } from '../index';

describe('<BuildCard />', () => {
  let store;
  let build;
  let renderConnectedComponent;

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

    renderConnectedComponent = () => mount(
      <Provider store={store}>
        <LanguageProvider messages={translationMessages}>
          <BuildCard build={build} />
        </LanguageProvider>
      </Provider>
    );
  });

  it('should be a div', () => {
    const renderedComponent = shallow(
      <BuildCard build={build} />
    ).dive();
    expect(renderedComponent.type()).toEqual('div');
  });

  it('should render the build name', () => {
    const renderedComponent = renderConnectedComponent();
    expect(renderedComponent.find('h4').length).toEqual(1);
    expect(renderedComponent.find('h4').text()).toEqual(build.name);
  });
});
