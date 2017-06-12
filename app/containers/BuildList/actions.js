/*
 *
 * BuildList actions
 *
 */

import {
  LOAD_BUILDS,
  LOAD_BUILDS_SUCCESS,
  LOAD_BUILDS_ERROR,
} from './constants';

/**
 * Load the builds, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_BUILDS
 */
export function loadBuilds() {
  return {
    type: LOAD_BUILDS,
  };
}

/**
 * Dispatched when the builds are loaded by the request saga
 *
 * @param  {array} builds The builds data
 *
 * @return {object}      An action object with a type of LOAD_BUILDS_SUCCESS passing the repos
 */
export function buildsLoaded(builds) {
  return {
    type: LOAD_BUILDS_SUCCESS,
    builds,
  };
}

/**
 * Dispatched when loading the builds fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_BUILDS_ERROR passing the error
 */
export function buildLoadingError(error) {
  return {
    type: LOAD_BUILDS_ERROR,
    error,
  };
}
