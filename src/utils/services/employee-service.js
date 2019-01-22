// import { EVP_API_URL } from '../constants/evp-api.constants';
// import axios from 'axios';
import { employeeListMock } from '../constants/employee-list-mock';

let instance = null;

class EmployeeService {
  
  constructor() {
    if(!instance) {
      instance = this;
    }
    // this.url = EVP_API_URL;
    return instance;
  }

  getEmployees() {
    // there is going to be an axios call to the server here.
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(employeeListMock);
        // reject()
      }, 2000);
    });

    return promise;
  }

  getEmployeesOnVacation() {
    const promise = new Promise(() => {
      setTimeout(() => {
        return employeeListMock;
      }, 2000);
    });

    return promise;
  }

}

export default new EmployeeService();

