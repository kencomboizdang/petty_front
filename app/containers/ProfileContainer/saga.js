import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import * as types from './constants';
import * as api from 'utils/api';
import axios from 'axios';
import * as actions from './actions';


function* getProfile(){
  const store = JSON.parse(sessionStorage.getItem('store'));
  const resp = yield call(api.getDetail, `Stores?username=${store.username}`);
  const { status, data } = resp;
  yield put(actions.getProfileSuccess(data));
}
function* saveProfile(){
  var profile = yield select(state => state.profileContainer.data);
  const res = yield call(api.put, 'Stores/update', profile);
  const { status, data } = res;
    if (status === 204) {
      yield put(actions.saveProfileSuccess());
    }
}
// Individual exports for testing
export default function* profileContainerSaga() {
  yield takeLatest(types.GET_PROFILE, getProfile);
  yield takeLatest(types.SAVE_PROFILE,saveProfile );
}
