import { 
  DO_RECEIVE, DO_REQUEST, REQUEST_ERROR
} from '../../utils/constants/actions.constants';

export function doRequest() {
  return {
    type: DO_REQUEST
  }
}

export function doReceive() {
  return {
    type: DO_RECEIVE
  }
}

export function requestError(payload) {
  return {
    type: REQUEST_ERROR,
    payload: payload
  }
}
