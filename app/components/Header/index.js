import React from 'react';
import { FormattedMessage } from 'react-intl';

import Logo from 'components/Logo';
import HeaderWrapper from './HeaderWrapper';
import Container from './Container';
import SiteTitle from './SiteTitle';
import Title from './Title';
import NavBar from './NavBar';
import Button from 'components/Button';
import HeaderLink from './HeaderLink';
import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <HeaderWrapper>
        <Container>
          <SiteTitle to="/">
            <Logo />
            <Title>Factorio Builds</Title>
          </SiteTitle>
          <NavBar>
            <Button to="/builds/create">Add a build</Button>
            <HeaderLink to="/login">
              <FormattedMessage {...messages.login} />
            </HeaderLink>
            <HeaderLink to="/register">
              <FormattedMessage {...messages.createAccount} />
            </HeaderLink>
          </NavBar>
        </Container>
      </HeaderWrapper>
    );
  }
}

export default Header;
