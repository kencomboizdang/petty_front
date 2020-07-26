import {
  take,
  call,
  put,
  select,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import * as types from './constants';
import * as api from 'utils/api';
import axios from 'axios';
import * as actions from './actions';

// Individual exports for testing
function* changeAPI() {
  console.log('AAA');

}
function* getOrderProductStore() {
  const store = JSON.parse(sessionStorage.getItem('store'));
  const resp = yield call(api.getDetail, `OrderProductStores/Store/${store.username}`);
  const { status, data } = resp;
  yield put(actions.fetchAllOrderStoreSuccess(data));
}
export default function* orderProductsContainerSaga() {
  yield takeLatest(types.DEFAULT_ACTION, changeAPI);
  yield takeLatest(types.GET_ORDER_PRODUCT_STORE, getOrderProductStore);
}
