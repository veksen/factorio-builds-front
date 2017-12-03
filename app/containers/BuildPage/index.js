/**
 *
 * BuildPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import PageWrapper from 'components/PageWrapper';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectBuild from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { loadBuild } from './actions';

export class BuildPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.loadBuild();
  }

  render() {
    const { build } = this.props;

    return (
      <PageWrapper>
        <Helmet>
          <title>{build.name}</title>
          <meta name="description" content={build.desc} />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </PageWrapper>
    );
  }
}

BuildPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  loadBuild: PropTypes.func.isRequired,
  build: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  build: makeSelectBuild(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadBuild: () => dispatch(loadBuild()),
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
