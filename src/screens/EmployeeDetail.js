import React, { Fragment } from 'react';
import withSidebar from '../components/withSidebar';
import './styles/common.css';
import EmployeeDetailCards from '../components/EmployeeDetailCards';

const EmployeeDetail = () => {
  return(
    <Fragment>
      <span className="header-text">Employee Detail</span>
      <hr />
      <EmployeeDetailCards />
    </Fragment>
  );
}

const mapStateToProps = ({ configuration: { sidebarExpanded } }) => {
  return {
    sidebarExpanded
  }
};

export default withSidebar(EmployeeDetail, mapStateToProps);