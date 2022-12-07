/**
 * For process asynchronous
 * Handle the action and terminate
 */

import toast from 'react-hot-toast';
import { call, put, SagaReturnType } from 'redux-saga/effects';
import { ActionSaga } from 'src/types/saga.types';
import { jwtInfoSuccess } from '../authentication/actions';
import {
  forgotPasswordError,
  forgotPasswordSuccess,
  idmRegisterError,
  idmRegisterSuccess,
} from './actions';
import { forgotUserAPI, registerUserAPI } from './apis';
import { CreateAccountForm, ForgotForm } from './types';

export function* registerUserWorker(action: ActionSaga<CreateAccountForm>) {
  try {
    const { payload } = action || {};
    if (payload) {
      const { data }: SagaReturnType<typeof registerUserAPI> = yield call(registerUserAPI, payload);
      yield put(idmRegisterSuccess());
      toast.success('Create account success!');
    }
  } catch (e) {
    yield put(idmRegisterError());
    console.error('Error', e);
    toast.error('Create account failed!');
  }
}

export function* forgotPasswordWorker(action: ActionSaga<ForgotForm>) {
  try {
    const { payload } = action || {};
    if (payload) {
      const { data }: SagaReturnType<typeof forgotUserAPI> = yield call(forgotUserAPI, payload);
      yield put(forgotPasswordSuccess());
      toast.success('Action success!');
    }
  } catch (e) {
    yield put(forgotPasswordError());
    console.error('Error', e);
    toast.error('Action failed!');
  }
}
