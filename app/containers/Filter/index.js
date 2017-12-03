/**
 *
 * Filter
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';

import injectReducer from 'utils/injectReducer';
import { toggleFilter } from './actions';
import makeSelectFilter from './selectors';
import reducer from './reducer';
import messages from './messages';

import Search from 'components/Search'; // eslint-disable-line import/first
import Input from './Input';
import Title from 'components/SideBar/Title'; // eslint-disable-line import/first
import Checkbox from 'components/Checkbox'; // eslint-disable-line import/first

const Separator = styled.hr`
  background: #D0D0D0;
  height: 1px;
  border: 0;
  margin: 15px 0;
`;

export class Filter extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Search>
          <Input placeholder="SEARCH" />
        </Search>

        <Title>
          <FormattedMessage {...messages.filterBuilds} />
        </Title>

        <Checkbox
          checked={this.props.Filter.onlyWithBlueprints}
          onClickEvent={() => this.props.toggleFilter('onlyWithBlueprints')}
        >
            Only with blueprints
        </Checkbox>

        <Separator />

        <Checkbox
          checked={this.props.Filter.gameState.early}
          onClickEvent={() => this.props.toggleFilter('earlyGame')}
        >
            Early-game
        </Checkbox>

        <Checkbox
          checked={this.props.Filter.gameState.mid}
          onClickEvent={() => this.props.toggleFilter('midGame')}
        >
            Mid-game
        </Checkbox>

        <Checkbox
          checked={this.props.Filter.gameState.late}
          onClickEvent={() => this.props.toggleFilter('lateGame')}
        >
            Late-game
        </Checkbox>

        <Separator />

        <Checkbox
          checked={this.props.Filter.type.balancers}
          onClickEvent={() => this.props.toggleFilter('typeBalancers')}
        >
            Balancers
        </Checkbox>

        <Checkbox
          checked={this.props.Filter.type.smelting}
          onClickEvent={() => this.props.toggleFilter('typeSmelting')}
        >
            Smelting
        </Checkbox>

        <Checkbox
          checked={this.props.Filter.type.trains}
          onClickEvent={() => this.props.toggleFilter('typeTrains')}
        >
            Trains
        </Checkbox>

        <Checkbox
          checked={this.props.Filter.type.production}
          onClickEvent={() => this.props.toggleFilter('typeProduction')}
        >
            Production
        </Checkbox>
      </div>
    );
  }
}

Filter.propTypes = {
  toggleFilter: PropTypes.func.isRequired,
  Filter: PropTypes.shape({
    onlyWithBlueprints: PropTypes.bool,
    gameState: PropTypes.shape({
      early: PropTypes.bool,
      mid: PropTypes.bool,
      late: PropTypes.bool,
    }),
    type: PropTypes.shape({
      balancers: PropTypes.bool,
      smelting: PropTypes.bool,
      trains: PropTypes.bool,
      production: PropTypes.bool,
    }),
  }).isRequired,
};

const mapStateToProps = createStructuredSelector({
  Filter: makeSelectFilter(),
});

function mapDispatchToProps(dispatch) {
  return {
    toggleFilter: (filter) => dispatch(toggleFilter(filter)),
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'filter', reducer });

export default compose(
  withReducer,
  withConnect,
)(Filter);
