import { axiosInceptors } from 'src/services/axiosInceptors';
import { ResponseServerAPI } from 'src/types/server.types';
import { CreateAccountForm, ForgotForm } from './types';

const NAME = 'idm';

export const registerUserAPI = (data: CreateAccountForm) => {
  return axiosInceptors.post<ResponseServerAPI>(NAME + '/users/register', data);
};

export const forgotUserAPI = (data: ForgotForm) => {
  return axiosInceptors.put<ResponseServerAPI>(NAME + '/users/forgot-password/' + data.email);
};
