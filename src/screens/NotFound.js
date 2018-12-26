import React, { Fragment } from 'react';
import withNavbar from '../components/withNavbar';

const  NotFoundContent = () => {
  return(
    <Fragment>
      <h2>Not Found :(</h2>
    </Fragment>
  );
};

const NotFound = withNavbar(NotFoundContent);

export default NotFound;

