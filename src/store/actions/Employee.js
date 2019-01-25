import { 
  SET_EMPLOYEE_VACATION,
  REQUEST_EMPLOYEE,
  RECEIVE_EMPLOYEES,
  RECEIVE_EMPLOYEE,
} from '../../utils/constants/actions.constants';
import EmployeeService from '../../utils/services/employee-service';

export function setEmployeeVacation(payload) {
  return {
    type: SET_EMPLOYEE_VACATION,
    payload: payload
  }
}

export function requestEmployee() {
  return {
    type: REQUEST_EMPLOYEE
  }
}

export function receiveEmployees(payload) {
  return {
    type: RECEIVE_EMPLOYEES,
    payload: payload
  }
}

export function receiveEmployee(payload) {
  return {
    type: RECEIVE_EMPLOYEE,
    payload: payload
  }
}

export function fetchEmployees() {
  return dispatch => {
    dispatch(requestEmployee());
    EmployeeService.getEmployees()
      .then(response => dispatch(receiveEmployees(response)));
  }
}

export function fetchEmployeeById(id) {
  return dispatch => {
    dispatch(requestEmployee());
    EmployeeService.getEmployeeById(id)
      .then(response => dispatch(receiveEmployee(response)))
  }
}