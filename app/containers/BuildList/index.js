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

export class BuildList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.loadBuilds();
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
        {JSON.stringify(this.props.BuildList.builds)}
        <FormattedMessage {...messages.header} />
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
