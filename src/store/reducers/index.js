import { selectedEmployeeReducer } from './selectedEmployeeReducer';
import { employeeListReducer } from './employeeListReducer'
import { configurationReducer } from './configurationReducer';
import { combineReducers } from 'redux';
import { vacationListReducer } from './vacationListReducer';

const rootReducer = combineReducers({
  selectedEmployee: selectedEmployeeReducer,
  employeeList: employeeListReducer,
  vacationList: vacationListReducer,
  configuration: configurationReducer
});

export default rootReducer;