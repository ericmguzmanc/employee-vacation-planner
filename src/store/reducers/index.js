import { employeeReducer } from './employeeReducer';
import { employeeListReducer } from './employeeListReducer'
import { configurationReducer } from './configurationReducer';
import { combineReducers } from 'redux';
import { vacationListReducer } from './vacationListReducer';

const rootReducer = combineReducers({
  employee: employeeReducer,
  employeeList: employeeListReducer,
  vacationList: vacationListReducer,
  configuration: configurationReducer
});

export default rootReducer;