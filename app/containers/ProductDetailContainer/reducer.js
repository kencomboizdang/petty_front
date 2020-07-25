/*
 *
 * ProductDetailContainer reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, CHANGE_PRODUCT_VALUE } from './constants';

export const initialState = {
  product: {
    category: null,
    name: '',
    description: '',
    brand: '',
    origin: '',
    price: 0,
    quantity: 0,
    img: '',
  },
  options:[]
};

/* eslint-disable default-case, no-param-reassign */
const productDetailContainerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:

        return;
      case CHANGE_PRODUCT_VALUE:
        draft.product[action.payload.name] = action.payload.value;
        break;
      default:
        return;
    }
  });

export default productDetailContainerReducer;
