import { createReducer } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { jwtInfo, jwtInfoError, jwtInfoSuccess, login, loginError, loginSuccess } from './actions';
import { AuthenticationReducer } from './types';

const initialState = {};

const authenticationReducer = createReducer<AuthenticationReducer>(initialState, (builder) => {
  builder.addCase(jwtInfo, (state, action) => {});
  builder.addCase(jwtInfoSuccess, (state, action) => {
    state.authentication = action.payload;
  });
  builder.addCase(jwtInfoError, (state, action) => {});
  builder.addCase(login, (state, action) => {
    state.ui = { loadingBtn: true };
  });
  builder.addCase(loginSuccess, (state, action) => {
    state.ui = { loadingBtn: false };
    state.authentication = action.payload;
  });
  builder.addCase(loginError, (state, action) => {
    state.ui = { loadingBtn: false };
  });
  builder.addDefaultCase((state, action) => {});
});

export default authenticationReducer;
