/**
 *
 * BuildPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import PageWrapper from 'components/PageWrapper';
import Container from 'containers/Container';
import SideBar from 'components/SideBar';
import Content from 'components/Content';
import Title from 'components/SideBar/Title';
import Blueprints from 'components/Blueprints';
import H1 from 'components/H1';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectBuild, { makeSelectBuildBlueprints } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadBuild, loadBuildBlueprints } from './actions';

const Image = styled.img`
  display: block;
  max-width: 60%;
`;

export class BuildPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.loadBuild();
    this.props.loadBuildBlueprints();
  }

  render() {
    const { build, blueprints } = this.props;

    const image = build.image
      ? `${build.image}.jpg`
      : 'trans.gif';
    const buildImage = require(`components/BuildCard/${image}`); // eslint-disable-line global-require

    return (
      <PageWrapper>
        <Helmet>
          <title>{build.name}</title>
          <meta name="description" content={build.desc} />
        </Helmet>

        <Container direction={'row'}>
          <SideBar>
            <Title>
              Blueprints
            </Title>
            {blueprints.length ? <Blueprints blueprints={blueprints} /> : null}
          </SideBar>
          <Content>
            <H1>
              {build.name}
            </H1>

            <p>
              {build.desc}
            </p>

            <Image src={buildImage} />
          </Content>
        </Container>
      </PageWrapper>
    );
  }
}

BuildPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  loadBuild: PropTypes.func.isRequired,
  loadBuildBlueprints: PropTypes.func.isRequired,
  build: PropTypes.object.isRequired,
  blueprints: PropTypes.blueprints.isRequired,
};

const mapStateToProps = createStructuredSelector({
  build: makeSelectBuild(),
  blueprints: makeSelectBuildBlueprints(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadBuild: () => dispatch(loadBuild()),
    loadBuildBlueprints: () => dispatch(loadBuildBlueprints()),
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'buildPage', reducer });
const withSaga = injectSaga({ key: 'buildPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(BuildPage);
