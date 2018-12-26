import React, { Fragment } from 'react';
import withNavbar from '../components/withNavbar';

const EmployeesContent =  () => {
  return(
    <Fragment>
      <h2>
        Employees
      </h2>
    </Fragment>
  );
}

export const Employees = withNavbar(EmployeesContent);

export default Employees;