import { 
  SET_EMPLOYEE_VACATION,
  REQUEST_EMPLOYEES,
  RECEIVE_EMPLOYEES,
} from '../../utils/constants/actions.constants';
import EmployeeService from '../../utils/services/employee-service';

export function setEmployeeVacation(payload) {
  return {
    type: SET_EMPLOYEE_VACATION,
    payload: payload
  }
}

export function requestEmployees() {
  return {
    type: REQUEST_EMPLOYEES
  }
}

export function receiveEmployees(payload) {
  return {
    type: RECEIVE_EMPLOYEES,
    payload: payload
  }
}

export function fetchEmployees() {
  return dispatch => {
    dispatch(requestEmployees());
    EmployeeService.getEmployees()
      .then(response => dispatch(receiveEmployees(response)));
  }
}