import { employees } from './employeeReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  employees
});

export default rootReducer;