import { selectedEmployeeReducer } from './selectedEmployeeReducer';
import { employeeListReducer } from './employeeListReducer'
import { configurationReducer } from './configurationReducer';
import { combineReducers } from 'redux';
import { vacationListReducer } from './vacationListReducer';
import { authReducer } from './authReducer';

const rootReducer = combineReducers({
  selectedEmployee: selectedEmployeeReducer,
  employeeList: employeeListReducer,
  vacationList: vacationListReducer,
  auth: authReducer,
  configuration: configurationReducer
});

export default rootReducer;