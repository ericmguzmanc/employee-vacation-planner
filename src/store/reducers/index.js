import { selectedEmployeeReducer } from './selectedEmployeeReducer';
import { employeeListReducer } from './employeeListReducer'
import { configurationReducer } from './configurationReducer';
import { combineReducers } from 'redux';
import { vacationListReducer } from './vacationListReducer';
import { authReducer } from './authReducer';
import {  saveState, doCheckAuthState } from '../../components/localStorage';


// const persistedState = loadState();

doCheckAuthState(); // check if auth state exists in localstorage, creates a model object if not

const rootReducer = combineReducers({
  selectedEmployee: selectedEmployeeReducer,
  employeeList: employeeListReducer,
  vacationList: vacationListReducer,
  auth: authReducer,
  configuration: configurationReducer
});

export default rootReducer;