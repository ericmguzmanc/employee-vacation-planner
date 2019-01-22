import React, { Fragment } from 'react';
import withSidebar from '../components/withSidebar';

const  NotFound = () => {
  return(
    <Fragment>
      <h2>Not Found :(</h2>
    </Fragment>
  );
};

const mapStateToProps = ({ configuration: { sidebarExpanded } }) => {
  return {
    sidebarExpanded
  }
};

export default withSidebar(NotFound, mapStateToProps);


