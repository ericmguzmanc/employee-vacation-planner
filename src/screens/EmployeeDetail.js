import React, { Fragment } from 'react';
import withNavbar from '../components/withNavbar';

const EmployeeDetailContent = () => {
  return(
    <Fragment>
      <h2>
        Employee Detail
      </h2>
    </Fragment>
  );
}

const EmployeeDetail = withNavbar(EmployeeDetailContent);

export default EmployeeDetail;