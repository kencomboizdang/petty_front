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
import { getList, getDetail } from 'utils/PettyApi';
import axios from 'axios';
import * as actions from './actions';

// Individual exports for testing
function* changeAPI() {
  console.log('AAA');
  // const resp = yield call(axiosService.get,"");
  // const resp = yield call(getDetail, "data/2.5/weather?q=hanoi&appid=80b4beb7a95bcaa5f087313e6ef8f4ed");
  // console.log(resp);
  // console.log("AAA");
  // const { status, data } = resp;
  // console.log(status);
  // console.log(data);
  // console.log(resp);
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
