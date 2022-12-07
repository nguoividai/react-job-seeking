import { createReducer } from '@reduxjs/toolkit';
import {
  forgotPassword,
  forgotPasswordError,
  forgotPasswordSuccess,
  idmRegister,
  idmRegisterError,
  idmRegisterSuccess,
} from './actions';
import { AdminUserReducer } from './types';

const initialState = { ui: {} };

const adminUserReducer = createReducer<AdminUserReducer>(initialState, (builder) => {
  builder.addCase(idmRegister, (state, action) => {
    state.ui = { loading: true };
  });
  builder.addCase(idmRegisterSuccess, (state, action) => {
    state.ui = { loading: false };
  });
  builder.addCase(idmRegisterError, (state, action) => {
    state.ui = { loading: false };
  });
  builder.addCase(forgotPassword, (state, action) => {
    state.ui = { loading: true };
  });
  builder.addCase(forgotPasswordSuccess, (state, action) => {
    state.ui = { loading: false };
  });
  builder.addCase(forgotPasswordError, (state, action) => {
    state.ui = { loading: false };
  });
  builder.addDefaultCase((state, action) => {});
});

export default adminUserReducer;
