import { combineReducers } from 'redux';
import adminUserReducer from './features/adminUser/reducers';
import authenticationReducer from './features/authentication/reducers';

export const sagaReducers = combineReducers({
  authentication: authenticationReducer,
  adminUser: adminUserReducer,
});
