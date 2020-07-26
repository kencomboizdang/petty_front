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
  GET_CATEGORY,
  GET_CATEGORY_SUCCESS,
  SAVE_PRODUCT_SUCCESS,
} from './constants';

export const initialState = {
  product: {
    id: '',
    categoryId: null,
    name: '',
    netWeight: '',
    description: '',
    brand: '',
    origin: '',
    price: 0,
    quantity: 0,
    img: '',
    storeId: '',
    startDate: '',
  },
  options: [],
  onSave: false,
};

/* eslint-disable default-case, no-param-reassign */
const productDetailContainerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        return;
      case CHANGE_PRODUCT_VALUE:
        draft.product[action.payload.name] = action.payload.value;
        draft.onSave = false;
        break;
      case GET_PRODUCT_SUCCESS:

        draft.product.id = action.data.id;
        draft.product.categoryId = action.data.categoryId;
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
        const d = new Date();
        const date1 =
          d.getFullYear() +
          '/' +
          (d.getMonth() + 1) +
          '/' +
          d.getDate();
        draft.product.startDate = date1;
        const categories = action.data;
        var catery = [];
        categories.forEach(element => {
          catery.push({
            label: element.name,
            value: element.id,
          });
        });
        draft.options = catery;
        const store = JSON.parse(sessionStorage.getItem('store'));
        draft.product.storeId = store.username;
        break;
      case SAVE_PRODUCT_SUCCESS:
        draft.onSave = true;
        break;
      default:
        return;
    }
  });

export default productDetailContainerReducer;
