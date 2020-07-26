// import { take, call, put, select } from 'redux-saga/effects';

import { takeLatest, select, put, call, push } from 'redux-saga/effects';
import * as types from './constants';
import * as api from 'utils/api';
import * as actions from './actions';
import history from './history';
// Individual exports for testing
function* loginSaga() {
  const username = yield select(state => state.loginPage.username);
  const password = yield select(state => state.loginPage.password);
  const param = {
    username,
    password,
  };
  const resp = yield call(api.login, 'Stores/login',param);
  const { status, data } = resp;
  if (status === 200){
    // yield call(history.push("/ddd"));

    yield put(actions.loginSuccess(data));
    // yield spush('/order');
  } else {
    yield put(actions.loginFailed());
  }
}

export default function* loginPageSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(types.LOGIN, loginSaga);
}
