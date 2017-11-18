import { take, put, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_BUILDS, LOAD_BLUEPRINTS } from 'containers/BuildList/constants';
import {
  buildsLoaded,
  buildLoadingError,
  blueprintsLoaded,
  blueprintLoadingError,
} from 'containers/BuildList/actions';

/**
 * Builds request/response handler
 */
export function* getBuilds() {
  // // Select username from store
  // const username = yield select(makeSelectUsername());
  const mockData = require('./mockBuilds.json'); // eslint-disable-line global-require
  // const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    // Call our request helper (see 'utils/request')
    const builds = yield mockData;
    // const repos = yield call(request, requestURL);
    yield put(buildsLoaded(builds));
  } catch (err) {
    yield put(buildLoadingError(err));
  }
}

/**
 * Bleuprints request/response handler
 */
export function* getBlueprints() {
  const mockData = require('./mockBlueprints.json'); // eslint-disable-line global-require

  try {
    const blueprints = yield mockData;
    yield put(blueprintsLoaded(blueprints));
  } catch (err) {
    yield put(blueprintLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* buildsData() {
  // Watches for LOAD_BUILDS actions and calls getBuilds when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(LOAD_BUILDS, getBuilds);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* blueprintsData() {
  // Watches for LOAD_BUILDS actions and calls getBuilds when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(LOAD_BLUEPRINTS, getBlueprints);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// All sagas to be loaded
export default [
  buildsData,
  blueprintsData,
];
