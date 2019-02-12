
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
    const { data } = action.payload;
      console.log('action in auth ', action.payload.data)
      return Object.assign({}, state, {
        token: data.token,
        userLoggedIn: true, 
        userLogged : {
          id: data.id,
          email: data.email,
          admin: data.admin
        } 
      });
  
    case LOG_OUT:
      return Object.assign({}, state, {
        token: null,
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

