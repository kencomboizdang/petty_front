import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import * as types from './constants';
import * as api from 'utils/api';
import * as actions from './actions';
// Individual exports for testing
function* getOrderDetail() {
  // See example in containers/HomePage/saga.js
  const resp = yield call(api.getDetail, 'OrderProductStores/1');
  const { status, data } = resp;
  if (status === 200) {
    yield put(actions.getOrderDetailSuccess(data));
  }
}
export default function* orderDetailContainerSaga() {
  yield takeLatest(types.GET_ORDER_DETAIL, getOrderDetail);
}
