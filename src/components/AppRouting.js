import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from '../screens/Home';
import Employees from '../screens/Employees';
import EmployeeDetail from '../screens/EmployeeDetail';
import NotFound from '../screens/NotFound';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={() => (<Redirect to="/home" />)} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/employee" component={Employees} />
      <Route exact path="/employee/:id" component={EmployeeDetail} />
      <Route component={NotFound} status={404} />
    </Switch>
  </Router>
);

export default AppRouter;