
import { 
  REQUEST_LOGIN,
  LOG_IN,
  REQUEST_LOGOUT,
  LOG_OUT
} from '../../utils/constants/actions.constants';
import { loadState } from '../../components/localStorage';

export function authReducer(
  state = loadState()
  // {
  //   requestLoading: false,
  //   userLoggedIn: false,
  //   userLogged : {
  //     id: '',
  //     email: '',
  //     admin: false
  //   }
  // }
  , action) {
  switch(action.type) {
    case REQUEST_LOGIN: 
      return Object.assign({}, state, {requestLoading: !state.requestLoading}); 
    
    case LOG_IN:
      return Object.assign({}, state, {
        userLoggedIn: true, 
        requestLoading: !state.requestLoading,
        userLogged : {
          id: '1',
          email: 'theericguzman@gmail.com',
          admin: true
        } 
      });
    
    case REQUEST_LOGOUT:
      return Object.assign({}, state, {requestLoading: !state.requestLoading}); 
    
    case LOG_OUT:
      return Object.assign({}, state, {
        userLoggedIn: false,
        requestLoading: !state.requestLoading,
        userLogged: {
          id: '',
          email: '',
          admin: false
        }
      }); 
  
    default: 
      return state;
  }
}

