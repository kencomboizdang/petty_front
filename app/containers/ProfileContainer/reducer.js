/*
 *
 * ProfileContainer reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, GET_PROFILE_SUCCESS, CHANGE_PRODUCT_VALUE } from './constants';

export const initialState = {
  data:{
    username:'',
    name:'',
    description:'',
    detail:'',
    district:'',
    email:'',
    phone:'',
    province:'',
    ward:'',
    logoImg:'',
  }
};

/* eslint-disable default-case, no-param-reassign */
const profileContainerReducer = (state = initialState, action) =>
  produce(state, draft  => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
        case CHANGE_PRODUCT_VALUE:
        draft.data[action.payload.name] = action.payload.value;
        draft.onSave = false;
        break;
        case GET_PROFILE_SUCCESS:
          draft.data.username= action.data.username;
          draft.data.name= action.data.name;
          draft.data.description= action.data.description;
          draft.data.detail= action.data.detail;
          draft.data.district= action.data.district;
          draft.data.email= action.data.email;
          draft.data.phone= action.data.phone;
          draft.data.province= action.data.province;
          draft.data.ward= action.data.ward;
          draft.data.logoImg= action.data.logoImg;
          break;
    }
  });

export default profileContainerReducer;
