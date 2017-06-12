/*
 *
 * Filter reducer
 *
 */

import { fromJS } from 'immutable';
import {
  TOGGLE_ONLY_WITH_BLUEPRINTS,
  TOGGLE_GAME_STATE,
  TOGGLE_TYPE,
} from './constants';

const initialState = fromJS({
  onlyWithBlueprints: false,
  gameState: {
    early: false,
    mid: false,
    late: false,
  },
  type: {
    balancer: false,
    smelting: false,
    trains: false,
    production: false,
  },
});

function filterReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_ONLY_WITH_BLUEPRINTS:
      return state
        .set('onlyWithBlueprints', !state.get('onlyWithBlueprints'));
    case TOGGLE_GAME_STATE:
      return state
        .setIn(['gameState', action.key], !state.getIn(['gameState', action.key]));
    case TOGGLE_TYPE:
      return state
        .setIn(['type', action.key], !state.getIn(['type', action.key]));

    default:
      return state;
  }
}

export default filterReducer;
