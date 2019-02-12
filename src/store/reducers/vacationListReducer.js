import {
  REQUEST_EMPLOYEES_ON_VACATION, RECEIVE_EMPLOYEES_ON_VACATION
} from '../../utils/constants/actions.constants';

export function vacationListReducer(state = {
  // isLoading: false,
  employees: []
}, action) {

  switch(action.type) {
    // case REQUEST_EMPLOYEES_ON_VACATION: 
    //   return Object.assign({}, state, {
    //     isLoading: !state.isLoading
    //   });
      
    case RECEIVE_EMPLOYEES_ON_VACATION:
      return Object.assign({}, state, {
        // isLoading: !state.isLoading,
        employees: [...action.payload]
      });

    default: 
      return state;
  }
}