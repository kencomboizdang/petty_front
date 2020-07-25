/*
 *
 * LoginPage actions
 *
 */

import { DEFAULT_ACTION,CHANGE_VALUE, LOGIN, LOGIN_SUCCESS, LOGIN_FAILED, GET_HISTORY } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export const onChangeValue=(name, value)=>{
  return {
    type: CHANGE_VALUE,
    name,
    value
  }
}
export const getHistory=(history)=>{
  return {
    type: GET_HISTORY,
    history

  }
}
export const login=()=>{
  return {
    type: LOGIN,

  }
}
export const loginSuccess=(data)=>{
  return {
    type: LOGIN_SUCCESS,
    data
  }
}
export const loginFailed=()=>{
  return {
    type: LOGIN_FAILED,
  }
}

