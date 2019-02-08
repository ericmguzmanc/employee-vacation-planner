import React, { Fragment, memo, useEffect } from 'react';
import { Route, withRouter, Redirect, Switch } from 'react-router-dom';
import Home from '../screens/Home';
import Employees from '../screens/Employees';
import EmployeeDetail from '../screens/EmployeeDetail';
import SignIn from '../screens/Auth/SignIn';
import SignUp from '../screens/Auth/SignUp';
import LogOut from '../screens/Auth/LogOut';
import NotFound from '../screens/NotFound';




const Routes = memo(function Routes(props) {
  
  const { loggedIn } = props;

  return(
    <Fragment>
      <Switch>
        <Route exact path="/signin" component={props => <SignInRoute loggedIn={loggedIn} />} />
        <Route exact path="/signup" component={props => <SignUp />} />
        <Route exact path="/logout" component={props => <LogOut />} />
        <PrivatRoute loggedIn={loggedIn} exact path="/" component={props => <Home />} />
        <PrivatRoute loggedIn={loggedIn} exact path="/home" component={props => <Home />} />
        <PrivatRoute loggedIn={loggedIn} exact path="/employees" component={props => <Employees />} />
        <PrivatRoute loggedIn={loggedIn} path="/employee/:id" component={props => <EmployeeDetail />} />
        <Route component={props => <NotFound />}/>
      </Switch>
    </Fragment>
  );
});

// const fakeAuth = {
//   isAuthenticated: true,
//   authenticate(cb) {
//     this.isAuthenticated = true
//     setTimeout(cb, 100)
//   },
//   signout(cb) {
//     this.isAuthenticated = false
//     setTimeout(cb, 100)
//   }
// }

const PrivatRoute = ({ component: Component, loggedIn, ...rest }) => {

  return(
    <Route {...rest} render={(props) => (
      loggedIn === true
        ? <Component {...props} />
        : <Redirect to='/signin' />
    )} />
  );
};

const SignInRoute = ({ loggedIn }) => (
    loggedIn === true
      ? <Redirect to='/home' />
      : <SignIn />
);

export default withRouter(Routes);