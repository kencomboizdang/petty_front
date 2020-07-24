/*
 *
 * OrderProductsContainer actions
 *
 */

import { DEFAULT_ACTION, GET_ORDER_PRODUCT_STORE,GET_ORDER_PRODUCT_STORE_FAILED,GET_ORDER_PRODUCT_STORE_SUCCESS } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export const  getAllOrderStore=()=>{
  return {
    type: GET_ORDER_PRODUCT_STORE,
  }
}
export const fetchAllOrderStoreSuccess = (data) => {
  return {
    type: GET_ORDER_PRODUCT_STORE_SUCCESS,
    payload: {
      data,
    },
  };
};
