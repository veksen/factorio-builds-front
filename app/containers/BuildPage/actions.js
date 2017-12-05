/*
 *
 * BuildPage actions
 *
 */

import {
  LOAD_BUILD,
  LOAD_BUILD_SUCCESS,
  LOAD_BUILD_ERROR,
  LOAD_BUILD_BLUEPRINTS,
  LOAD_BUILD_BLUEPRINTS_SUCCESS,
  LOAD_BUILD_BLUEPRINTS_ERROR,
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

export function loadBuildBlueprints(buildId) {
  return {
    type: LOAD_BUILD_BLUEPRINTS,
    buildId,
  };
}

export function buildBlueprintsLoaded(blueprints) {
  return {
    type: LOAD_BUILD_BLUEPRINTS_SUCCESS,
    blueprints,
  };
}

export function buildBlueprintsLoadingError(error) {
  return {
    type: LOAD_BUILD_BLUEPRINTS_ERROR,
    error,
  };
}
