import React, { Fragment, PureComponent } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUmbrellaBeach, faUsers, faCog } from '@fortawesome/free-solid-svg-icons';
import './styles/Navbar.css';
import { toggleSidebarExpanded } from '../store/actions/configurationActions';
import Routes from './Routes';


class AppRouter extends PureComponent {

  state = {
    isLoggedIn: this.props.auth.userLoggedIn,
    knownRoute: true
  }

  componentDidMount() {

  }

  setKnownRouteToFalse = () => {
    console.log('got in set known route to false')
    this.setState({
      knownRoute: false
    });

    console.log('this.state ', this.state)
  }

  onToggle = () => {
    this.props.toggleSidebarExpanded();
  }

  toggleSidebar = () => {
    return !false;
  }

  render() {
    return(
      <Fragment>
        <Router>
          <Route render={({ location, history }) => (
            <Fragment>
            { (this.state.isLoggedIn && this.state.knownRoute ) &&
              <SideNav
                style={{backgroundColor: "#292929"}}
                onSelect={(selected) => {
                  const to = '/' + selected;
                  if (location.pathname !== to) {
                    history.push(to);
                  }
                }}
                expanded={this.props.sidebarExpanded}
                onToggle = {this.onToggle}
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
              }
              <main>
                <Routes loggedIn={this.state.isLoggedIn} /*setKnownRouteToFalse={ () => this.setKnownRouteToFalse()}*//>
              </main>
            </Fragment>
            )}
          />
        </Router>
      </Fragment>
    );
  }

}

const mapStateToProps = ({ configuration, auth }) => {
  return {
    sidebarExpanded: configuration.sidebarExpanded,
    auth
  }
}

export default connect(mapStateToProps, { toggleSidebarExpanded })(AppRouter);