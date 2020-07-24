import {
  take,
  call,
  put,
  select,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import * as types from './constants';
import * as axiosService from 'utils/axiosService';
import * as api from 'utils/api';
import axios from 'axios';
import * as actions from './actions';

// Individual exports for testing
function* changeAPI() {
  console.log('AAA');

}
function* getOrderProductStore() {
  console.log('ADADA');
  // const resp = yield call(axiosService.get,'https://localhost:5001/api/Addresses?id=1');
  const resp = yield call(api.getDetail, 'OrderProductStores/Store/tri');
  //  const resp = yield call(axios.get, 'https://localhost:5001/api/OrderProductStores?id=1');
  const { status, data } = resp;
  yield put(actions.fetchAllOrderStoreSuccess(data));
}
export default function* orderProductsContainerSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(types.DEFAULT_ACTION, changeAPI);
  yield takeLatest(types.GET_ORDER_PRODUCT_STORE, getOrderProductStore);
}
