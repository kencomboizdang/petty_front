/*
 *
 * ProfileContainer actions
 *
 */

import { DEFAULT_ACTION, GET_PROFILE, GET_PROFILE_SUCCESS, CHANGE_PRODUCT_VALUE, SAVE_PROFILE, SAVE_PROFILE_SUCCESS } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export const  getProfile=()=>{
  return {
    type: GET_PROFILE,
  }
}
export const  getProfileSuccess=(data)=>{
  return {
    type: GET_PROFILE_SUCCESS,
    data
  }
}
export const changeProductValue = (name, value) => {
  return {
    type: CHANGE_PRODUCT_VALUE,
    payload: {
      name,
      value,
    },
  };
};

export const saveProfile = () => {
  return {
    type: SAVE_PROFILE,

  };
};
export const saveProfileSuccess = () => {
  return {
    type: SAVE_PROFILE_SUCCESS,
  };
};
