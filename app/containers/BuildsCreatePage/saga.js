import { all, takeLatest } from 'redux-saga/effects';

import { SAVE_BUILD } from 'containers/BuildList/constants';
import { saveBuild } from 'containers/BuildList/saga';

// Individual exports for testing
export default function* defaultSaga() {
  yield all([
    takeLatest(SAVE_BUILD, saveBuild),
  ]);
}
