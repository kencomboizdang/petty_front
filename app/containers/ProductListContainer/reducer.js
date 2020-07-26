/*
 *
 * ProductListContainer reducer
 *
 */
import produce, { isDraft } from 'immer';
import { DEFAULT_ACTION, GET_PRODUCTS_SUCCESS } from './constants';

export const initialState = {
  data: [],
};

/* eslint-disable default-case, no-param-reassign */
const productListContainerReducer = (state = initialState, action) =>
  produce(state,  draft  => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case GET_PRODUCTS_SUCCESS:
        console.log(action.payload.data);
        draft.data= action.payload.data;
        break;
    }
  });

export default productListContainerReducer;
