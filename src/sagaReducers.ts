import { combineReducers } from 'redux';
import adminUserReducer from './features/adminUser/reducers';
import authenticationReducer from './features/authentication/reducers';
import promptFormReducer from './features/promptForm/store/reducer';

export const sagaReducers = combineReducers({
  authentication: authenticationReducer,
  adminUser: adminUserReducer,
  promptForm: promptFormReducer,
});
