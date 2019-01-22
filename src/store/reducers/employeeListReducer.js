import {
  REQUEST_EMPLOYEES, RECEIVE_EMPLOYEES
} from '../../utils/constants/actions.constants';

export function employeeListReducer(state = {
  isLoading: false,
  employees: []
}, action) {
  switch(action.type) {
    case REQUEST_EMPLOYEES: 
      console.log('here on request employees')
      return Object.assign({}, state, {
        isLoading: !state.isLoading
      });
      
      case RECEIVE_EMPLOYEES:
      console.log('here on receive employees')
      return Object.assign({}, state, {
        isLoading: !state.isLoading,
        employees: [...action.payload]
      });

    default: 
      return state;
  }
}