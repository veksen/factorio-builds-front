import React from 'react';
// import { Provider } from 'react-redux';
// import { browserHistory } from 'react-router-dom';
import { shallow } from 'enzyme';

// import LanguageProvider from 'containers/LanguageProvider';

// import configureStore from '../../../configureStore';
// import { translationMessages } from '../../../i18n';

import { Header } from '../index';
import Title from '../Title';
import HeaderLink from '../HeaderLink';

describe('<Header />', () => {
  // let store;
  let renderComponent;
  // let renderConnectedComponent;

  // beforeAll(() => {
  //   store = configureStore({}, browserHistory);
  // });

  // Before each test reset the build data for safety
  beforeEach(() => {
    renderComponent = () => shallow(
      <Header />
    ).dive();

    // renderConnectedComponent = () => mount(
    //   <Provider store={store}>
    //     <LanguageProvider messages={translationMessages}>
    //       <ConnectedHeader />
    //     </LanguageProvider>
    //   </Provider>
    // );
  });

  it('should render a div', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.type()).toEqual('div');
  });

  it('should render the site title', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find(Title).length).toEqual(1);
    expect(renderedComponent.find(Title).dive().text()).toEqual('Factorio Builds');
  });

  it.skip('should render a navbar with login and create account', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find(HeaderLink).filterWhere(((n) => n.text() === 'Login')).length).toEqual(1);
    expect(renderedComponent.find(HeaderLink).filterWhere(((n) => n.text() === 'Create Account')).length).toEqual(1);
  });
});
