/*
 *
 * OrderDetailContainer reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, GET_ORDER_DETAIL_SUCCESS, SET_STATUS_SUCCESS } from './constants';

export const initialState = {
  data:"",
};

/* eslint-disable default-case, no-param-reassign */
const orderDetailContainerReducer = (state = initialState, action) =>
  produce(state,draft  => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case GET_ORDER_DETAIL_SUCCESS:
        draft.data = action.data;
        break;
      case SET_STATUS_SUCCESS:
        draft.data.orderStatus= 'ship';
    }
  });

export default orderDetailContainerReducer;
