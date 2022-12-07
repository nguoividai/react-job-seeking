import { createAction } from '@reduxjs/toolkit';
import { LoginForm } from '../authentication/types';
import { CreateAccountForm, ForgotForm } from './types';

export const idmRegister = createAction<CreateAccountForm>('idm/users/register');
export const idmRegisterSuccess = createAction<undefined>('idm/users/register/success');
export const idmRegisterError = createAction<undefined>('idm/users/register/error');

export const forgotPassword = createAction<ForgotForm>('idm/users/forgot-password');
export const forgotPasswordSuccess = createAction<undefined>('idm/users/forgot-password/success');
export const forgotPasswordError = createAction<undefined>('idm/users/forgot-password/error');
