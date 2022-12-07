import { axiosInceptors } from 'src/services/axiosInceptors';
import { ResponseServerAPI } from 'src/types/server.types';
import { Authentication, LoginForm } from './types';

const NAME = 'authentication';

export const getJwtInfoAPI = () => {
  return axiosInceptors.post<ResponseServerAPI<Authentication>>(NAME + '/jwt/info');
};

export const loginAPI = (data: LoginForm) => {
  return axiosInceptors.post<ResponseServerAPI<Authentication>>(NAME + '/jwt/login', data);
};
