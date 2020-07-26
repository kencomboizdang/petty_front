/*
 *
 * ProductListContainer actions
 *
 */

import { DEFAULT_ACTION,GET_PRODUCTS,GET_PRODUCTS_SUCCESS } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export const  getAllProducts=()=>{
  return {
    type: GET_PRODUCTS,
  }
}
export const getProductsSucess = (data) => {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload: {
      data,
    },
  };
};
