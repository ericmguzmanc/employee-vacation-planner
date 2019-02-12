import React, { Fragment, PureComponent } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUmbrellaBeach, faUsers, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
// import { Spinner, Col } from 'reactstrap';
import './styles/Navbar.css';
import { toggleSidebarExpanded } from '../store/actions/configuration';
import Routes from './Routes';
import { signOut } from '../store/actions/auth';


class AppRouter extends PureComponent {

  state = {
    isLoggedIn: this.props.auth.userLoggedIn,
    knownRoute: true
  }

  componentDidMount() {

  }

  componentDidUpdate() {
    // console.log('component did update ', this.props)
  }

  setKnownRouteToFalse = () => {
    console.log('got in set known route to false')
    this.setState({
      knownRoute: false
    });

    console.log('this.state ', this.state)
  }

  signOut = async () => {
    await this.props.signOut();
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
        <Router styles={{opacity:"0.5"}}>
          <Route render={({ location, history }) => (
            <Fragment>
            { (this.props.auth.userLoggedIn && this.state.knownRoute ) &&
              <SideNav
                style={{backgroundColor: "#292929"}}
                onSelect={(selected) => {
                  if(selected !== undefined) {
                    const to = '/' + selected;
                    if (location.pathname !== to) {
                      history.push(to);
                    }
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
                  <NavItem onClick={() => this.signOut()}>
                    <NavIcon>
                      <FontAwesomeIcon icon={faSignOutAlt} />
                    </NavIcon>
                    <NavText>
                      <span>
                        Sign Out
                      </span>
                    </NavText>
                  </NavItem>
                </Nav>
              </SideNav>
              }
              <main>
                <Routes loggedIn={this.props.auth.userLoggedIn} /*setKnownRouteToFalse={ () => this.setKnownRouteToFalse()}*//>
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
};

// const AppRouting = connect(mapStateToProps, { toggleSidebarExpanded })(AppRouter);

export default connect(mapStateToProps, { toggleSidebarExpanded, signOut })(AppRouter);