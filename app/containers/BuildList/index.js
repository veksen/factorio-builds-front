/*
 *
 * BuildList
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { loadBuilds } from './actions';
import {
  makeSelectBuildListFiltered,
  makeSelectBuildListCount,
  makeSelectBuildListFilteredCount,
} from './selectors';
import messages from './messages';
import BuildCard from 'components/BuildCard'; // eslint-disable-line import/first
import {
  Title,
  Strong,
} from './styles';

export class BuildList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.loadBuilds();
  }

  renderBuildCard(build) {
    const buildId = build._id; // eslint-disable-line no-underscore-dangle

    return (
      <BuildCard key={buildId} build={build} />
    );
  }

  render() {
    // const { loading, error, builds } = this.props;
    // const buildsListProps = {
    //   loading,
    //   error,
    //   builds,
    // };

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
};

const mapStateToProps = createStructuredSelector({
  BuildListFiltered: makeSelectBuildListFiltered(),
  BuildListCount: makeSelectBuildListCount(),
  BuildListFilteredCount: makeSelectBuildListFilteredCount(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadBuilds: () => dispatch(loadBuilds()),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BuildList);
