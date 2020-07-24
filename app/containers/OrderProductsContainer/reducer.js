/*
 *
 * OrderProductsContainer reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION,GET_ORDER_PRODUCT_STORE_SUCCESS } from './constants';
import { fromJS } from 'immutable';

export const initialState = fromJS(
  {
    isDisplay:true,
    data:[]
  }
);

/* eslint-disable default-case, no-param-reassign */
const orderProductsContainerReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        return state.set('isDisplay', false);
        case GET_ORDER_PRODUCT_STORE_SUCCESS:
          return state.set('data',action.payload.data);
    }
  });

export default orderProductsContainerReducer;
