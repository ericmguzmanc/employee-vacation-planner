import React, { Fragment, memo } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Home from '../screens/Home';
import Employees from '../screens/Employees';
import EmployeeDetail from '../screens/EmployeeDetail';


const Routes = memo(function Routes(props) {
  return(
    <Fragment>
      <Route exact path="/" component={props => <Home />} />
      <Route exact path="/home" component={props => <Home />} />
      <Route exact path="/employees" component={props => <Employees />} />
      <Route path="/employee/:id" component={props => <EmployeeDetail />} />
      {/* <Route component={props => <NotFound />} status={404} /> */}
    </Fragment>
  );
});

export default withRouter(Routes);