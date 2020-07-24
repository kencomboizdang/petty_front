import axiosService from './axiosService';
import { API_ENDPOINT } from './constants';
import qs from 'query-string';

export const getDetail = url => {
  return axiosService.get(`${API_ENDPOINT}/${url}`);
};
