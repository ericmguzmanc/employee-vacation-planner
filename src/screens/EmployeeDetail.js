import React, { Fragment } from 'react';
import withSidebar from '../components/withSidebar';

const EmployeeDetail = () => {
  return(
    <Fragment>
      <h3>Employee Detail</h3>
      <hr />
      ...
    </Fragment>
  );
}

const mapStateToProps = ({ page: { sidebarExpanded } }) => {
  return {
    sidebarExpanded
  }
};

export default withSidebar(EmployeeDetail, mapStateToProps);