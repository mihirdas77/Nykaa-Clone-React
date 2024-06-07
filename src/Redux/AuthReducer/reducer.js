import { SET_USER_LOGIN, SET_USER_NAVBAR } from './actionTypes';

const initialState = {
  login: false,
  navbar:true
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_LOGIN:
      return {
        ...state,
        login: action.payload,
      };
      case SET_USER_NAVBAR:
      return {
        ...state,
        navbar: action.payload,
      };
    default:
      return state;
  }
};