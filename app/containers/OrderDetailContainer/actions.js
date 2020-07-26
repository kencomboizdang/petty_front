/*
 *
 * OrderDetailContainer actions
 *
 */

import { DEFAULT_ACTION,GET_ORDER_DETAIL, GET_ORDER_DETAIL_SUCCESS, SET_STATUS, SET_STATUS_SUCCESS } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export const getOrderDetail=(id)=> {
  return {
    type: GET_ORDER_DETAIL,
    id
  };
}
export const getOrderDetailSuccess=(data)=> {
  return {
    type: GET_ORDER_DETAIL_SUCCESS,
    data
  };
}
export const setStatus=()=> {
  return {
    type: SET_STATUS,
  };
}
export const setStatusSuccess=()=> {
  return {
    type: SET_STATUS_SUCCESS,
  };
}
