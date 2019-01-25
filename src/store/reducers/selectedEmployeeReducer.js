
import { 
  REQUEST_EMPLOYEE,
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
    case REQUEST_EMPLOYEE: 
      return Object.assign({}, state, {isLoading: !state.isLoading}); 
      
    case RECEIVE_EMPLOYEE:
      return Object.assign({}, state, {employee: action.payload[0], isLoading: !state.isLoading });

    case SET_EMPLOYEE_VACATION:
      return state;
    
    default: 
      return state;
  }
}