/*
 *
 * ProductDetailContainer actions
 *
 */

import { DEFAULT_ACTION, CHANGE_PRODUCT_VALUE, GET_CATEGORY, GET_CATEGORY_SUCCESS,GET_PRODUCT,GET_PRODUCT_SUCCESS, SAVE_PRODUCT, SAVE_PRODUCT_SUCCESS } from './constants';

export const defaultAction = () => {
  return {
    type: DEFAULT_ACTION,
  };
};
export const changeProductValue = (name, value) => {
  return {
    type: CHANGE_PRODUCT_VALUE,
    payload: {
      name,
      value,
    },
  };
};
export const getCategory=()=>{
  return {
    type: GET_CATEGORY,
  }
}
export const getProduct=(id)=>{
  return {
    type: GET_PRODUCT,
    id
  }
}
export const getProductSuccess=(data)=>{
  return {
    type: GET_PRODUCT_SUCCESS,
    data
  }
}

export const getCategorySuccess = data => {
  return {
    type: GET_CATEGORY_SUCCESS,
    data,
  };
};
export const saveProduct = () => {
  return {
    type: SAVE_PRODUCT,

  };
};
export const saveProductSuccess = () => {
  return {
    type: SAVE_PRODUCT_SUCCESS,
  };
};
