import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import Logo from 'components/Logo'; // eslint-disable-line import/first
import Button from 'components/Button';// eslint-disable-line import/first
import HeaderWrapper from './HeaderWrapper';
import Container from './Container';
import SiteTitle from './SiteTitle';
import Title from './Title';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';

export class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <HeaderWrapper>
        <Container direction="row">
          <SiteTitle to="/">
            <Logo />
            <Title>Factorio Builds</Title>
          </SiteTitle>
          <NavBar>
            <Button onClick={() => this.props.dispatch(push('/builds/create'))}>Add a build</Button>
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

Header.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Header);
