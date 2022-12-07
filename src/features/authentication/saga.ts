/**
 * For process asynchronous
 * Watch for dispatched actions and fork a worker on every action
 */

import { takeLatest } from 'redux-saga/effects';
import { jwtInfo, login } from './actions';
import { getJwtInfoWorker, loginWorker } from './workers';

export function* authenticationSaga() {
  yield takeLatest(jwtInfo, getJwtInfoWorker);
  yield takeLatest(login, loginWorker);
}
