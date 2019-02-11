import { REQUEST_LOGIN, REQUEST_LOGOUT, LOG_IN, LOG_OUT } from '../../utils/constants/actions.constants';
import AuthService from '../../utils/services/auth-service';

export function requestLogin() {
  return {
    type: REQUEST_LOGIN
  }
}

export function requestLogOut() {
  return {
    type: REQUEST_LOGOUT
  }
}

export function logIn(payload) {
  return {
    type: LOG_IN,
    payload: payload
  }
}

export function logOut(payload) {
  return {
    type: LOG_OUT,
    payload: payload
  }
}


export function signIn() {
  return async dispatch => {
    await dispatch(requestLogin());
    await AuthService.signIn()
      .then(() => dispatch(logIn()));
  }
}

export function signOut() {
  return async dispatch => {
    await dispatch(requestLogOut());
    await AuthService.signOut()
        .then(() => dispatch(logOut()));
  }
}