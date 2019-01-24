import React, { Fragment } from 'react';
import withSidebar from '../components/withSidebar';
import EmployeeList from '../components/EmployeeList';
import './styles/common.css';

const Employees =  () => {
  return(
    <Fragment>
      <span className="header-text">Employees</span>
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

