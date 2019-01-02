import { 
  REQUEST_EMPLOYEES,
  RECEIVE_EMPLOYEES,
  SET_EMPLOYEE_VACATION
} from '../../utils/constants/actions.constants';

export function requestEmployees(payload) {
  return {
    type: REQUEST_EMPLOYEES,
    payload: payload
  }
}

export function receiveEmployees(payload) {
  return {
    type: RECEIVE_EMPLOYEES,
    payload: payload
  }
}

export function setEmployeeVacation(payload) {
  return {
    type: SET_EMPLOYEE_VACATION,
    payload: payload
  }
}