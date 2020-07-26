import {
  take,
  call,
  put,
  select,
  takeLatest,
  takeEvery,
} from 'redux-saga/effects';
import * as types from './constants';
import * as api from 'utils/api';
import * as actions from './actions';
function* getCategory() {
  const res = yield call(api.getDetail, 'Categories/Categories');
  const { status, data } = res;
  if (status === 200) {
    yield put(actions.getCategorySuccess(data));
  }
}
function* getProductDetail({ id }) {
  const param = yield `Products/${id}`;

  const resp = yield call(api.getDetail, param);
  const { status, data } = resp;
  if (status === 200) {
    yield put(actions.getProductSuccess(data));
  }
}
// Individual exports for testing
export default function* productDetailContainerSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(types.GET_CATEGORY, getCategory);
  yield takeLatest(types.GET_PRODUCT, getProductDetail);
}
