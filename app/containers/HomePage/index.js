/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Helmet from 'react-helmet';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

// import { makeSelectLoading } from 'containers/App/selectors';

import SideBar from 'containers/SideBar';
import Filter from 'containers/Filter';
import Content from 'containers/Content';
import Container from 'containers/Container';
import PageWrapper from './PageWrapper';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    // const { loading } = this.props;

    return (
      <PageWrapper>
        <Helmet
          title="Home Page"
          meta={[
            { name: 'description', content: 'A React.js Boilerplate application homepage' },
          ]}
        />
        <Container>
          <SideBar>
            <Filter />
          </SideBar>
          <Content>
            content
          </Content>
        </Container>
      </PageWrapper>
    );
  }
}

// HomePage.propTypes = {
//   loading: React.PropTypes.bool,
// };
//
// const mapStateToProps = createStructuredSelector({
//   loading: makeSelectLoading(),
// });

// Wrap the component to inject dispatch and state into it
// export default connect(mapStateToProps, null)(HomePage);
export default HomePage;
