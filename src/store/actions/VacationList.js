import { 
  RECEIVE_EMPLOYEES_ON_VACATION,
} from '../../utils/constants/actions.constants';
import EmployeeService from '../../utils/services/employee-service';
import { doReceive, doRequest } from '../actions/isFetching';

export function receiveEmployeesOnVacation(payload) {
  return {
    type: RECEIVE_EMPLOYEES_ON_VACATION,
    payload: payload
  }
}

export function fetchEmployeesOnVacation() {
  return async dispatch => {
    await dispatch(doRequest());
    await EmployeeService.getEmployeesOnVacation()
      .then(response => dispatch(receiveEmployeesOnVacation(response)));
    await dispatch(doReceive());
  }
}