/*
 *
 * ProductDetailContainer reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  CHANGE_PRODUCT_VALUE,
  GET_PRODUCT_SUCCESS,
  GET_CATEGORY,GET_CATEGORY_SUCCESS
} from './constants';

export const initialState = {
  product: {
    id: '',
    category: null,
    name: '',
    description: '',
    brand: '',
    origin: '',
    price: 0,
    quantity: 0,
    img: '',
  },
  options: [],
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
      case GET_PRODUCT_SUCCESS:
        draft.product.id = action.data.id;
        draft.product.category = action.data.categoryId;
        draft.product.name = action.data.name;
        draft.product.description = action.data.description;
        draft.product.brand = action.data.brand;
        draft.product.origin = action.data.origin;
        draft.product.price = action.data.price;
        draft.product.quantity = action.data.quantity;
        // draft.product.name= action.data.
        break;
      case GET_CATEGORY:
        break;
      case GET_CATEGORY_SUCCESS:
        const categories = action.data;
        var catery = [];
        categories.forEach(element => {
          catery.push({
            label: element.name,
            value: element.id,
          });
        });
        draft.options = catery;
        break;
      default:
        return;
    }
  });

export default productDetailContainerReducer;
