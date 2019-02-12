import { LOG_IN, LOG_OUT } from '../../utils/constants/actions.constants';
import AuthService from '../../utils/services/auth-service';
import { doReceive, doRequest } from './isFetching';

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
    await dispatch(doRequest());
    await AuthService.signIn()
      .then(() => dispatch(logIn()));
    await dispatch(doReceive());
  }
}

export function signOut() {
  return async dispatch => {
    // dispatch(doRequest());
    await AuthService.signOut()
        .then(() => dispatch(logOut()));
    // dispatch(doReceive());
  }
}