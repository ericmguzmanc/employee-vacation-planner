import React, { Fragment } from 'react';
import VacationList from '../components/VacationList';
import withSidebar from '../components/withSidebar';

const Home = (props) => {
  return(
    <Fragment>
      <div >
        <h3>On vacation</h3>
        <hr />
        <div className="text-center">
          <VacationList />
        </div>
      </div>
    </Fragment>
  );
};


const mapStateToProps = ({ page: { sidebarExpanded } }) => {
  return {
    sidebarExpanded
  }
};

export default withSidebar(Home, mapStateToProps);
