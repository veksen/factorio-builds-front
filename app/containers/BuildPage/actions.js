/*
 *
 * BuildPage actions
 *
 */

import {
  LOAD_BUILD,
  LOAD_BUILD_SUCCESS,
  LOAD_BUILD_ERROR,
} from './constants';

export function loadBuild(id) {
  return {
    type: LOAD_BUILD,
    id,
  };
}

export function buildLoaded(build) {
  return {
    type: LOAD_BUILD_SUCCESS,
    build,
  };
}

export function buildLoadingError(error) {
  return {
    type: LOAD_BUILD_ERROR,
    error,
  };
}
