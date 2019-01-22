import React, { Fragment } from 'react';
import withSidebar from '../components/withSidebar';
import EmployeeList from '../components/EmployeeList';

const Employees =  () => {
  return(
    <Fragment>
      <h3>Employees</h3>
      <hr />
      <EmployeeList />
    </Fragment>
  );
}


const mapStateToProps = ({ configuration: { sidebarExpanded } }) => {
  return {
    sidebarExpanded
  }
};

export default withSidebar(Employees, mapStateToProps);

