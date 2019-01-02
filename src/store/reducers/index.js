import { employees } from './employeeReducer';
import { page } from './pageReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  employees,
  page
});

export default rootReducer;