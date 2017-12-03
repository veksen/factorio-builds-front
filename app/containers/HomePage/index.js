/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Helmet from 'react-helmet';

import PageWrapper from 'components/PageWrapper';
import SideBar from 'components/SideBar';
import Filter from 'containers/Filter';
import Content from 'components/Content';
import BuildList from 'containers/BuildList';
import Container from 'containers/Container';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <PageWrapper>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" value="A React.js Boilerplate application homepage" />
        </Helmet>
        <Container direction={'row'}>
          <SideBar>
            <Filter />
          </SideBar>
          <Content>
            <BuildList />
          </Content>
        </Container>
      </PageWrapper>
    );
  }
}

export default HomePage;
