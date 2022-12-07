import { all, fork } from 'redux-saga/effects';
import { adminUserSaga } from './features/adminUser/saga';
import { authenticationSaga } from './features/authentication/saga';

export default function* rootSaga() {
  yield all([fork(authenticationSaga), fork(adminUserSaga)]);
}
