import React, { Fragment, memo } from 'react';
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
        <Route exact path="/signin" component={props => <SignInRoute history={props} loggedIn={loggedIn} />} />
        <Route exact path="/signup" component={props => <SignUp />} />
        <Route exact path="/logout" component={props => <LogOut />} />
        <PrivateRoute loggedIn={loggedIn} exact path="/" component={props => <Home />} />
        <PrivateRoute loggedIn={loggedIn} exact path="/home" component={props => <Home />} />
        <PrivateRoute loggedIn={loggedIn} exact path="/employees" component={props => <Employees />} />
        <PrivateRoute loggedIn={loggedIn} path="/employee/:id" component={props => <EmployeeDetail />} />
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

const PrivateRoute = ({ component: Component, loggedIn, ...rest }) => {
  // console.log('private route reload ', loggedIn)
  return(
    <Route {...rest} render={(props) => (
      loggedIn === true
        ? <Component {...props} />
        : <Redirect to='/signin' />
    )} />
  );
};

const SignInRoute = ({ loggedIn, history }) => (
    loggedIn === true
      ? <Redirect to='/home' />
      : <SignIn router={history}/>
);

export default withRouter(Routes);