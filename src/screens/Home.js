import React, { Fragment } from 'react';
import VacationList from '../components/VacationList';
import withNavbar from '../components/withNavbar';

const HomeContent = () => {
  return(
    <Fragment>
      <div >
        <VacationList />
      </div>
    </Fragment>
  );
};

const Home = withNavbar(HomeContent);

export default Home;
