import axiosService from './axiosService';
import { API_ENDPOINT } from './constants';
import qs from 'query-string';

export const getDetail = url => {
  return axiosService.get(`${API_ENDPOINT}/${url}`);
};
export const login = (url,params = {}) => {
  let queryParams = '';
  if (Object.keys(params).length > 0) {
    queryParams = `?${qs.stringify(params)}`;
  }
  return axiosService.post(`${API_ENDPOINT}/${url}${queryParams}`);
};
