/**
 * For process asynchronous
 * Handle the action and terminate
 */

import toast from 'react-hot-toast';
import { call, put, SagaReturnType } from 'redux-saga/effects';
import { ActionSaga } from 'src/types/saga.types';
import { jwtInfoError, jwtInfoSuccess, loginError, loginSuccess } from './actions';
import { getJwtInfoAPI, loginAPI } from './apis';
import { LoginForm } from './types';

export function* getJwtInfoWorker() {
  try {
    const { data }: SagaReturnType<typeof getJwtInfoAPI> = yield call(getJwtInfoAPI);
    yield put(jwtInfoSuccess(data.data));
  } catch (e) {
    yield put(jwtInfoError());
    console.error('Error', e);
  }
}

export function* loginWorker(action: ActionSaga<LoginForm>) {
  try {
    const { payload } = action;
    if (payload) {
      const { data }: SagaReturnType<typeof loginAPI> = yield call(loginAPI, payload);
      yield put(loginSuccess(data.data));
      toast.success('Login success!');
      localStorage.setItem('v1hub', JSON.stringify(data.data));
    }
  } catch (e) {
    yield put(loginError());
    console.error('Error', e);
    toast.error('Login failed!');
  }
}
