import { ENV_API_URL, TOKEN } from '../constants/env-api.constants';
import axios from 'axios';
import { employeeListMock } from '../constants/employee-list-mock';

let instance = null;

class EmployeeService {
  
  constructor() {
    if(!instance) {
      instance = this;
    }
    this.url = `${ENV_API_URL}/api`;
    return instance;
  }

  async getEmployees() {
    const employees = await axios.get(`${this.url}/employee`, { headers: { 'x-access-token':  TOKEN} })

    return employees;
  }

  getEmployeesOnVacation() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(employeeListMock);
      }, 1000);
    });

    return promise;
  }

  getEmployeeById(id) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(employeeListMock.filter((employee) => employee.employeeCode === Number(id)));
      }, 1200);
    });

    return promise;
  }

}

export default new EmployeeService();

