
import { 
  REQUEST_EMPLOYEES,
  RECEIVE_EMPLOYEES,
  RECEIVE_EMPLOYEE,
  SET_EMPLOYEE_VACATION
} from '../../utils/constants/actions.constants';


export function selectedEmployeeReducer(
  state = {
    isLoading: false,
    employee: {
      name: '',
      lastName: '',
      title: '',
      hireDate: '',
      vacationActive : '',
      vacationStarts: '',
      vacationEnds: ''
    }
  }
  , action) {
  switch(action.type) {
    case REQUEST_EMPLOYEES: 
      return !this.state.isLoading;
      
    case RECEIVE_EMPLOYEES:
      return state;

    case RECEIVE_EMPLOYEE:
      console.log('payload ', action)
      return Object.assign({}, state, {employee: action.payload[0] });

    case SET_EMPLOYEE_VACATION:
      return state;
    
    default: 
      return state;
  }
}