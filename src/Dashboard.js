import React, { Component } from 'react';
import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap';
import logo from './agrivolutionLogo.png';
//import './App.css';

class Dashboard extends Component {
  render() {
    return (

      //Create the NAV menu bar
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">React-Bootstrap</a>
          </Navbar.Brand>
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
                Sign Out
            </NavItem>

          </Nav>
        </Navbar.Collapse>
      </Navbar>

    );
  }
}



export default Dashboard;
