/**
 * For process asynchronous
 * Watch for dispatched actions and fork a worker on every action
 */

import { takeLatest } from 'redux-saga/effects';
import { forgotPassword, idmRegister } from './actions';
import { forgotPasswordWorker, registerUserWorker } from './workers';

export function* adminUserSaga() {
  yield takeLatest(idmRegister, registerUserWorker);
  yield takeLatest(forgotPassword, forgotPasswordWorker);
}
