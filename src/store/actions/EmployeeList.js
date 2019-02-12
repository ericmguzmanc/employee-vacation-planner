import { RECEIVE_EMPLOYEES } from '../../utils/constants/actions.constants';
import EmployeeService from '../../utils/services/employee-service';
import { doRequest, doReceive } from '../actions/isFetching';

export function receiveEmployees(payload) {
  return {
    type: RECEIVE_EMPLOYEES,
    payload: payload
  }
}

export function fetchEmployees() {
  return async dispatch => {
    dispatch(doRequest());
    await EmployeeService.getEmployees()
      .then(response => dispatch(receiveEmployees(response)));
    dispatch(doReceive());
  }
}