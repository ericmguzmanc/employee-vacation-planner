import { employeeReducer } from './employeeReducer';
import { employeeListReducer } from './employeeListReducer'
import { configurationReducer } from './configurationReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  employee: employeeReducer,
  employeeList: employeeListReducer,
  configuration: configurationReducer
});

export default rootReducer;