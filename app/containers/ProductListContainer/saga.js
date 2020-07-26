import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import * as types from './constants';
import * as api from 'utils/api';
import axios from 'axios';
import * as actions from './actions';
// Individual exports for testing
function* getProduct(){
  const store = JSON.parse(sessionStorage.getItem('store'));
  const resp = yield call(api.getDetail, `Products/Store?storeId=${store.username}`);
  const { status, data } = resp;
  yield put(actions.getProductsSucess(data));
}
export default function* productListContainerSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(types.GET_PRODUCTS, getProduct);
}
