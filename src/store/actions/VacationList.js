import { 
  REQUEST_EMPLOYEES_ON_VACATION,
  RECEIVE_EMPLOYEES_ON_VACATION,
} from '../../utils/constants/actions.constants';
import EmployeeService from '../../utils/services/employee-service';

export function requestEmployeesOnVacation() {
  return {
    type: REQUEST_EMPLOYEES_ON_VACATION
  }
}

export function receiveEmployeesOnVacation(payload) {
  return {
    type: RECEIVE_EMPLOYEES_ON_VACATION,
    payload: payload
  }
}

export function fetchEmployeesOnVacation() {
  return dispatch => {
    dispatch(requestEmployeesOnVacation());
    EmployeeService.getEmployeesOnVacation()
      .then(response => dispatch(receiveEmployeesOnVacation(response)));
  }
}