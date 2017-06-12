/*
 *
 * BuildList reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_BUILDS,
  LOAD_BUILDS_SUCCESS,
} from './constants';

const initialState = fromJS({
  builds: [],
});

function buildListReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_BUILDS:
      return state;
    case LOAD_BUILDS_SUCCESS:
      return state
        .set('builds', action.builds);
    default:
      return state;
  }
}

export default buildListReducer;
