import {
  REQUEST_EMPLOYEES, RECEIVE_EMPLOYEES
} from '../../utils/constants/actions.constants';

export function employeeListReducer(state = {
  isLoading: false,
  employees: []
}, action) {
  switch(action.type) {
    case REQUEST_EMPLOYEES: 
      return Object.assign({}, state, {
        isLoading: !state.isLoading
      });
      
      case RECEIVE_EMPLOYEES:
      return Object.assign({}, state, {
        isLoading: !state.isLoading,
        employees: [...action.payload.data]
      });

    default: 
      return state;
  }
}