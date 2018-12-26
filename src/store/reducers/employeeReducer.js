
import { 
  REQUEST_EMPLOYEES,
  RECEIVE_EMPLOYEES,
  SET_EMPLOYEE_VACATION
} from '../../utils/constants/actions.constants';


export function employees(
  state = {
    name: '',
    lastName: '',
    title: '',
    hireDate: '',
    vacationActive : '',
    vacationStarts: '',
    vacationEnds: ''
  }
  , action) {
  switch(action) {
    case REQUEST_EMPLOYEES: 
      return state;
      
    case RECEIVE_EMPLOYEES:
      return state;

    case SET_EMPLOYEE_VACATION:
      return state;
    
    default: 
      return state;
  }
}