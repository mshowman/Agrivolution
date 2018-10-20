import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import logo from './agrivolutionLogo.png';
import Farm from './Farm';
//import './App.css';

const username="TestUser";

class Dashboard extends Component {

  render() {
    return (

      //Create the NAV menu bar
      <div>
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand><img src={logo} /></Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavDropdown eventKey={3} title="Farms" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Register</MenuItem>
              <MenuItem eventKey={3.2}>Create Crop Cycle</MenuItem>
              <MenuItem eventKey={3.3}>Business Rules</MenuItem>
            </NavDropdown>

            <NavDropdown eventKey={4} title="Users" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>

            <NavDropdown eventKey={3} title="Devices" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>

            <NavDropdown eventKey={3} title="Reporting" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>

            <NavDropdown eventKey={3} title="Account" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>

          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
                {username} - Sign Out
            </NavItem>

          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div><Farm name="1-NE" /></div>
      <div><Farm name="1-NW" /></div>
      <div><Farm name="2-NW" /></div>
      <div><Farm name="1-SE" /></div>
    </div>
    );
  }
}

export default Dashboard;
