import React, { Fragment } from 'react';
import VacationList from '../components/VacationList';
import withSidebar from '../components/withSidebar';
import './styles/common.css';

const Home = (props) => {
  return(
    <Fragment>
      <span className="header-text">On vacation</span>
      <hr />
      <div className="text-center">
        <VacationList />
      </div>
    </Fragment>
  );
};


const mapStateToProps = ({ configuration: { sidebarExpanded } }) => {
  return {
    sidebarExpanded
  }
};

export default withSidebar(Home, mapStateToProps);
