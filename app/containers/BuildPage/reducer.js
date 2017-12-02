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
} from './constants';

const initialState = fromJS({
  build: {},
  error: {},
});

function buildPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_BUILD:
      return state;
    case LOAD_BUILD_SUCCESS:
      console.log(action.build);
      return state
        .set('build', action.build);
    case LOAD_BUILD_ERROR:
      return state
        .set('build', {})
        .set('error', action.error);
    default:
      return state;
  }
}

export default buildPageReducer;
