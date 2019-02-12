import { LOG_IN, LOG_OUT } from '../../utils/constants/actions.constants';
import AuthService from '../../utils/services/auth-service';
import { doReceive, doRequest, requestError } from './isFetching';

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


export function signIn(payload) {
  return async dispatch => {
    await dispatch(doRequest());
    await AuthService.signIn(payload)
      .then(res => {
        console.log('res ', res)
        if (res.data.success) {
          dispatch(logIn(res.data))
        } else {
          dispatch(requestError(res.data))
        }
      
      })
      .catch(err => dispatch(requestError(err)))
    await dispatch(doReceive());
    }
  }
  
export function signOut() {
  return async dispatch => {
    await dispatch(doRequest());
    await AuthService.signOut()
      .then(res => dispatch(logOut(res)))
      .catch(err => dispatch(requestError(err)))
    await dispatch(doReceive());
  }
}