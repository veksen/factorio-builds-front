/**
 *
 * BuildList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { loadBuilds, loadBlueprints } from './actions';
import {
  makeSelectBuildListFiltered,
  makeSelectBuildListCount,
  makeSelectBuildListFilteredCount,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import BuildCard from 'components/BuildCard'; // eslint-disable-line import/first
import {
  Title,
  Strong,
} from './styles';

export class BuildList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.loadBuilds();
    this.props.loadBlueprints();
  }

  renderBuildCard(build) {
    const buildId = build._id; // eslint-disable-line no-underscore-dangle

    return (
      <BuildCard key={buildId} build={build} />
    );
  }

  render() {
    return (
      <div>
        <Title>
          <FormattedMessage
            {...messages.header}
            values={{ displaying: <Strong>{this.props.BuildListFilteredCount}</Strong>, total: <Strong>{this.props.BuildListCount}</Strong> }}
          />
        </Title>

        {this.props.BuildListFiltered.map(this.renderBuildCard)}
      </div>
    );
  }
}

BuildList.propTypes = {
  BuildListFiltered: PropTypes.array,
  BuildListCount: PropTypes.int,
  BuildListFilteredCount: PropTypes.int,
  loadBuilds: PropTypes.func.isRequired,
  loadBlueprints: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  BuildListFiltered: makeSelectBuildListFiltered(),
  BuildListCount: makeSelectBuildListCount(),
  BuildListFilteredCount: makeSelectBuildListFilteredCount(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadBuilds: () => dispatch(loadBuilds()),
    loadBlueprints: () => dispatch(loadBlueprints()),
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'buildList', reducer });
const withSaga = injectSaga({ key: 'buildList', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(BuildList);
