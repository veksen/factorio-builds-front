import { all, call, put, takeLatest, select } from 'redux-saga/effects';

import request from 'utils/request';
import { LOAD_BUILD } from './constants';
import {
  buildLoaded,
  buildLoadingError,
} from './actions';
import { makeSelectLocation } from 'containers/App/selectors'; // eslint-disable-line import/first

export function* getBuild() {
  const location = yield select(makeSelectLocation());

  // TODO: don't do this.
  const splitPathname = location.pathname.split('/');
  const id = splitPathname[splitPathname.length - 1];
  console.log(id);

// 5a22401eb64e8a2625cbbc1a

  const requestURL = `http://localhost:4040/api/builds/${id}`;

  try {
    const builds = yield call(request, requestURL);
    yield put(buildLoaded(builds));
  } catch (err) {
    yield put(buildLoadingError(err));
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  yield all([
    takeLatest(LOAD_BUILD, getBuild),
  ]);
}
