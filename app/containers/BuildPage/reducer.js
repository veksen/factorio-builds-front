/*
 *
 * BuildPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_BUILD,
  LOAD_BUILD_SUCCESS,
  LOAD_BUILD_ERROR,
  LOAD_BUILD_BLUEPRINTS,
  LOAD_BUILD_BLUEPRINTS_SUCCESS,
  LOAD_BUILD_BLUEPRINTS_ERROR,
} from './constants';

const initialState = fromJS({
  build: {},
  blueprints: [],
  error: {},
});

function buildPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_BUILD:
      return state;
    case LOAD_BUILD_SUCCESS:
      return state
        .set('build', action.build);
    case LOAD_BUILD_ERROR:
      return state
        .set('build', {})
        .set('error', action.error);
    case LOAD_BUILD_BLUEPRINTS:
      return state;
    case LOAD_BUILD_BLUEPRINTS_SUCCESS:
      return state
        .set('blueprints', action.blueprints);
    case LOAD_BUILD_BLUEPRINTS_ERROR:
      return state
        .set('blueprints', [])
        .set('error', action.error);
    default:
      return state;
  }
}

export default buildPageReducer;
