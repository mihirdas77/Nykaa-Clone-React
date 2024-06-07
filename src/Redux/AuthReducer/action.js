import { SET_USER_LOGIN } from './actionTypes';
import { SET_USER_NAVBAR } from './actionTypes';

export const setUserLogin = (loginStatus) => ({
  type: SET_USER_LOGIN,
  payload: loginStatus,
});

export const setUserNavbar = (navbarStatus) => ({
  type: SET_USER_NAVBAR,
  payload: navbarStatus,
});