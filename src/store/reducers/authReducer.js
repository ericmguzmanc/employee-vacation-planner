
import { 
  REQUEST_LOGIN,
  LOG_IN,
  REQUEST_LOGOUT,
  LOG_OUT
} from '../../utils/constants/actions.constants';


export function selectedEmployeeReducer(
  state = {
    userLoggedIn: false,
    userLogged : {
      id: '',
      email: '',
      admin: ''
    }
  }
  , action) {
  switch(action.type) {
    case REQUEST_LOGIN: 
      return Object.assign({}, state, {isLoading: !state.isLoading}); 
      
    case LOG_IN:
      return Object.assign({}, state, {employee: action.payload[0], isLoading: !state.isLoading });

    case REQUEST_LOGOUT:
      return state;

    case LOG_OUT:
      return state;
    
    default: 
      return state;
  }
}