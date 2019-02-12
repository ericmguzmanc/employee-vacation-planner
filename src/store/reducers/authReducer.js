
import { LOG_IN, LOG_OUT } from '../../utils/constants/actions.constants';
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

    case LOG_IN:
      return Object.assign({}, state, {
        userLoggedIn: true, 
        userLogged : {
          id: '1',
          email: 'theericguzman@gmail.com',
          admin: true
        } 
      });
    
    case LOG_OUT:
      return Object.assign({}, state, {
        userLoggedIn: false,
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

