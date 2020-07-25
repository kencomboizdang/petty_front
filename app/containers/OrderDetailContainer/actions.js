/*
 *
 * OrderDetailContainer actions
 *
 */

import { DEFAULT_ACTION,GET_ORDER_DETAIL, GET_ORDER_DETAIL_SUCCESS } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export const getOrderDetail=()=> {
  return {
    type: GET_ORDER_DETAIL,
  };
}
export const getOrderDetailSuccess=(data)=> {
  return {
    type: GET_ORDER_DETAIL_SUCCESS,
    data
  };
}
