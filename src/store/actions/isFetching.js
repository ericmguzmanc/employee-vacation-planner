import { 
  DO_RECEIVE, DO_REQUEST
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
