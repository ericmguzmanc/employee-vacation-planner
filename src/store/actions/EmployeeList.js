import { RECEIVE_EMPLOYEES } from '../../utils/constants/actions.constants';
import EmployeeService from '../../utils/services/employee-service';
import { doRequest, doReceive, requestError } from '../actions/isFetching';

export function receiveEmployees(payload) {
  return {
    type: RECEIVE_EMPLOYEES,
    payload: payload
  }
}

export function fetchEmployees() {
  return async dispatch => {
    await dispatch(doRequest());
    await EmployeeService.getEmployees()
      .then(res => dispatch(receiveEmployees(res)))
      .catch(err => dispatch(requestError(err)))
    await dispatch(doReceive());
  }
}