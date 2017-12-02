/*
 *
 * BuildList actions
 *
 */

import {
  LOAD_BUILDS,
  LOAD_BUILDS_SUCCESS,
  LOAD_BUILDS_ERROR,
  LOAD_BLUEPRINTS,
  LOAD_BLUEPRINTS_SUCCESS,
  LOAD_BLUEPRINTS_ERROR,
  SAVE_BUILD,
  SAVE_BUILD_SUCCESS,
  SAVE_BUILD_ERROR,
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

export function loadBlueprints() {
  return {
    type: LOAD_BLUEPRINTS,
  };
}

export function saveBuild(build) {
  return {
    type: SAVE_BUILD,
    build,
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
export function blueprintsLoaded(blueprints) {
  return {
    type: LOAD_BLUEPRINTS_SUCCESS,
    blueprints,
  };
}
export function buildSaved(build) {
  return {
    type: SAVE_BUILD_SUCCESS,
    build,
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
export function blueprintLoadingError(error) {
  return {
    type: LOAD_BLUEPRINTS_ERROR,
    error,
  };
}
export function buildSavingError(error) {
  return {
    type: SAVE_BUILD_ERROR,
    error,
  };
}
