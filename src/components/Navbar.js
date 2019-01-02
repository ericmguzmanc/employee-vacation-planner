import React from 'react';
import {
  Collapse,
  Navbar,
  Nav,
  NavItem,
} from 'reactstrap';
import './styles/Navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUmbrellaBeach, faUsers, faCog } from '@fortawesome/free-solid-svg-icons';


const NavBar = () => {

  const itemLinkSpan = {
    marginLeft: "5px"
  };

  return (
    <div>
      <Navbar color="dark" dark light expand="md">
        <div href="/home" className="NavItem-link">
          <Link to="/home" className="link">
            <FontAwesomeIcon icon={faUmbrellaBeach} />
            <span style={itemLinkSpan}> Active Vacations </span>
          </Link>
        </div>
        <Collapse isOpen={false} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="NavItem-link">
              <Link to="/employee" className="link"> 
                <FontAwesomeIcon icon={faUsers} />
                <span style={itemLinkSpan}>Employees</span>
              </Link>
            </NavItem>
            <NavItem className="NavItem-link">
              <Link to="/settings" className="link">
                <FontAwesomeIcon icon={faCog} />
                <span style={itemLinkSpan}>Settings</span>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};


export default NavBar;