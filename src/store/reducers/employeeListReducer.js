import { RECEIVE_EMPLOYEES } from '../../utils/constants/actions.constants';

export function employeeListReducer(state = {
  employees: []
}, action) {
  switch(action.type) {
    
      case RECEIVE_EMPLOYEES:
      return Object.assign({}, state, {
        employees: [...action.payload.data]
      });

    default: 
      return state;
  }
}