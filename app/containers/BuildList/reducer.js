/*
 *
 * BuildList reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_BUILDS,
  LOAD_BUILDS_SUCCESS,
  LOAD_BLUEPRINTS,
  LOAD_BLUEPRINTS_SUCCESS,
  SAVE_BUILD,
  SAVE_BUILD_SUCCESS,
} from './constants';

const initialState = fromJS({
  builds: [],
  blueprints: [],
});

function buildListReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_BUILDS:
      return state;
    case LOAD_BUILDS_SUCCESS:
      return state
        .set('builds', action.builds);
    case LOAD_BLUEPRINTS:
      return state;
    case LOAD_BLUEPRINTS_SUCCESS:
      return state
        .set('blueprints', action.blueprints);
    case SAVE_BUILD:
      return state;
    case SAVE_BUILD_SUCCESS:
      return state
        .set('builds', state.get('builds').concat(action.build));
    default:
      return state;
  }
}

export default buildListReducer;
