import React, { Fragment, memo } from 'react';
import { Route, withRouter, Redirect, Switch } from 'react-router-dom';
import Home from '../screens/Home';
import Employees from '../screens/Employees';
import EmployeeDetail from '../screens/EmployeeDetail';
import SignIn from '../screens/Auth/SignIn';
import SignUp from '../screens/Auth/SignUp';
import LogOut from '../screens/Auth/LogOut';
import NotFound from '../screens/NotFound';
import * as ROUTES from '../utils/constants/routes';

const Routes = memo(function Routes(props) {
  
  const { loggedIn } = props;  

  return(
    <Fragment>
      <Switch>
        <Route exact path={ROUTES.SING_IN} component={props => <SignInRoute history={props} loggedIn={loggedIn} />} />
        <Route exact path={ROUTES.SING_UP} component={props => <SignUp />} />
        <Route exact path={ROUTES.LOG_OUT} component={props => <LogOut />} />
        <PrivateRoute loggedIn={loggedIn} exact path="/" component={props => <Home />} />
        <PrivateRoute loggedIn={loggedIn} exact path={ROUTES.HOME} component={props => <Home />} />
        <PrivateRoute loggedIn={loggedIn} exact path={ROUTES.EMPLOYEES} component={props => <Employees />} />
        <PrivateRoute loggedIn={loggedIn} path={`${ROUTES.EMPLOYEE}/:id`} component={props => <EmployeeDetail />} />
        <Route component={props => <NotFound />}/>
      </Switch>
    </Fragment>
  );
});

const PrivateRoute = ({ component: Component, loggedIn, ...rest }) => {
  // console.log('private route reload ', loggedIn)
  return(
    <Route {...rest} render={(props) => (
      loggedIn === true
        ? <Component {...props} />
        : <Redirect to={ROUTES.SING_IN} />
    )} />
  );
};

const SignInRoute = ({ loggedIn, history }) => (
    loggedIn === true
      ? <Redirect to={ROUTES.HOME} />
      : <SignIn router={history}/>
);

export default withRouter(Routes);