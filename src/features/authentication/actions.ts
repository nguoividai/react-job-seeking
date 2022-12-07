import { createAction } from '@reduxjs/toolkit';
import { Authentication, LoginForm } from './types';

export const jwtInfo = createAction<undefined>('authentication/jwt/info');
export const jwtInfoSuccess = createAction<Authentication>('authentication/jwt/info/success');
export const jwtInfoError = createAction<undefined>('authentication/jwt/info/error');

export const login = createAction<LoginForm>('authentication/jwt/login');
export const loginSuccess = createAction<Authentication>('authentication/jwt/login/success');
export const loginError = createAction<undefined>('authentication/jwt/login/error');
