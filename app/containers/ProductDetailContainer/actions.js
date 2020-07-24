/*
 *
 * ProductDetailContainer actions
 *
 */

import { DEFAULT_ACTION, CHANGE_PRODUCT_VALUE } from './constants';

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
