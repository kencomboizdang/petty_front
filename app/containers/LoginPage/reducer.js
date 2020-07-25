/*
 *
 * LoginPage reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  CHANGE_VALUE,
  LOGIN_SUCCESS,
  GET_HISTORY,
} from './constants';
import history from './history';
export const initialState = {
  username: '',
  password: '',
  history: '',
  data:'',
};

/* eslint-disable default-case, no-param-reassign */
const loginPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case CHANGE_VALUE:
        if (action.name === 'username') {
          draft.username = action.value;
        } else if (action.name === 'password') {
          draft.password = action.value;
        }
        break;
      case LOGIN_SUCCESS:
        sessionStorage.setItem('store', JSON.stringify(action.data));
        draft.data=action.data;
        break;
      case GET_HISTORY:
        draft.history = action.history;
        break;
      default:
        break;
    }
  });

export default loginPageReducer;
