//AgrivolutionNavbarComponent class
import React, { Component } from 'react';
import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap';
import logo from './agrivolutionLogo.png';
//import './bootstrap/css/bootstrap.css';
//change the color of the navbar
const navbar = {backgroundColor: '#FFFF'};

class ANavbar extends Component{
  render(){
  return(
      //Create the NAV menu bar
      <Navbar   >
        <Navbar.Header>
           <Navbar.Brand pullLeft>
            <img  src={logo} className="App-logo" alt="logo" />
           </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav >

            <NavDropdown eventKey={3} title="Farms" id="basic-nav-dropdown" on="hover">
              <MenuItem eventKey={3.1}>Register</MenuItem>
              <MenuItem eventKey={3.2}>Create Crop Cycle</MenuItem>
              <MenuItem eventKey={3.3}>Business Rules</MenuItem>
            </NavDropdown>

            <NavDropdown eventKey={4} title="Users" id="basic-nav-dropdown">
              <MenuItem eventKey={4.1}>Register</MenuItem>
            </NavDropdown>

            <NavDropdown eventKey={5} title="Devices" id="basic-nav-dropdown">
              <MenuItem eventKey={5.1}>Register</MenuItem>
              <MenuItem eventKey={5.2}>Configuration</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={5.3}>Control</MenuItem>
              <MenuItem eventKey={5.4}>Calibrate</MenuItem>
            </NavDropdown>

            <NavDropdown eventKey={6} title="Reporting" id="basic-nav-dropdown">
              <MenuItem eventKey={6.1}>Real-Time</MenuItem>
              <MenuItem eventKey={6.2}>Historical </MenuItem>
            </NavDropdown>

            <NavDropdown eventKey={7} title="Account" id="basic-nav-dropdown">
              <MenuItem eventKey={7.1}>Profile</MenuItem>
              <MenuItem eventKey={7.2}>Subscription</MenuItem>
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

export default ANavbar;
