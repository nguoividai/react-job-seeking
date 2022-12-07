import axios, { AxiosRequestConfig } from 'axios';
import { Authentication } from 'src/features/authentication/types';

const { REACT_APP_HOST } = process.env;
const v1hub = localStorage.getItem('v1hub');
const v1hubParse: Authentication = v1hub ? JSON.parse(v1hub) : undefined;
const tokenString = v1hubParse ? v1hubParse?.tokenString : undefined;

const config: AxiosRequestConfig = {
  baseURL: REACT_APP_HOST + '/api/v1',
  headers: {
    'Content-Type': 'application/json',
    Authorization: tokenString ? `Bearer ${tokenString}` : undefined,
  },
};

export const axiosInceptors = axios.create(config);
