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
import makeSelectBuildList from './selectors';
import messages from './messages';
import BuildCard from 'components/BuildCard'; // eslint-disable-line import/first

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
        <h4>
          <FormattedMessage {...messages.header} />
        </h4>

        {this.props.BuildList.builds.map(this.renderBuildCard)}
      </div>
    );
  }
}

BuildList.propTypes = {
  BuildList: PropTypes.object.isRequired,
  loadBuilds: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  BuildList: makeSelectBuildList(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadBuilds: () => dispatch(loadBuilds()),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BuildList);
