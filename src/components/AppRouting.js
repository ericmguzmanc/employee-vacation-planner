import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import Home from '../screens/Home';
import Employees from '../screens/Employees';
import EmployeeDetail from '../screens/EmployeeDetail';
// import NotFound from '../screens/NotFound';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUmbrellaBeach, faUsers, faCog } from '@fortawesome/free-solid-svg-icons';
import './styles/Navbar.css';
import { toggleSidebarExpanded } from '../store/actions/pageActions';

const AppRouter = (props) => {

  const onToggle = () => {
    props.toggleSidebarExpanded();
  };

  return(
    <Fragment>
      <Router>
        <Route render={({ location, history }) => (
          <Fragment>
            <SideNav
              onSelect={(selected) => {
                const to = '/' + selected;
                if (location.pathname !== to) {
                  history.push(to);
                }
              }}
              onToggle = {onToggle}
            >
              <Toggle />
              <Nav 
                defaultSelected={location.pathname.substring(1, location.pathname.length)}
              >
                <NavItem eventKey="home">
                  <NavIcon>
                    <FontAwesomeIcon icon={faUmbrellaBeach} />
                  </NavIcon>
                  <NavText>
                    Vacations
                  </NavText>
                </NavItem>
                <NavItem eventKey="employees">
                  <NavIcon>
                    <FontAwesomeIcon icon={faUsers} />
                  </NavIcon>
                  <NavText>
                      Employees
                  </NavText>
                </NavItem>
                <NavItem eventKey="settings">
                  <NavIcon>
                    <FontAwesomeIcon icon={faCog} />
                  </NavIcon>
                  <NavText>
                      Settings
                  </NavText>
                </NavItem>
              </Nav>
            </SideNav>
            <main>
              <Route exact path="/" component={props => <Home />} />
              <Route exact path="/home" component={props => <Home />} />
              <Route exact path="/employees" component={props => <Employees />} />
              <Route path="/employee/:id" component={props => <EmployeeDetail />} />
              {/* <Route component={props => <NotFound />} status={404} /> */}
            </main>
          </Fragment>
          )}
        />
      </Router>
    </Fragment>
  );

  
};



export default connect(null, { toggleSidebarExpanded })(AppRouter);