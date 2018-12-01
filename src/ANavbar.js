//AgrivolutionNavbarComponent class
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Navbar, Nav, NavDropdown, NavItem } from 'react-bootstrap';
import { IndexLinkContainer } from 'react-router-bootstrap';
import logo from './agrivolutionLogo.png';
import './ANavbar.css';
import Main from './Main';

//change the color of the navbar
//const navbar = {backgroundColor: '#FFFF'};
const username = "Tim E. Anybody";


// function userLevelDisplay(level){
//       if(level == "owner"){
//
//       }
//       if(level == "manager"){
//
//       }
//       if(level == "member")
//
//
// }

class ANavbar extends Component {
  render() {
    return (
      //Create the NAV menu bar
      <div>
        <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand pullLeft>
              <IndexLinkContainer to="/">
                <img src={logo} />
              </IndexLinkContainer>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>

              <NavDropdown eventKey={3} title="Farms" id="basic-nav-dropdown"  >
                <IndexLinkContainer to='/register-farm'><NavItem>Register</NavItem></IndexLinkContainer>
                <IndexLinkContainer to='/create-grow-area'><NavItem>Create Grow Area</NavItem></IndexLinkContainer>
                <IndexLinkContainer to='/create-crop-cycle'><NavItem>Create Crop Cycle</NavItem></IndexLinkContainer>
                <IndexLinkContainer to='/create-business-rule'><NavItem>Business Rules</NavItem></IndexLinkContainer>
              </NavDropdown>

              <NavDropdown eventKey={4} title="Users" id="basic-nav-dropdown">
                <IndexLinkContainer to='/register-user'><NavItem>Register</NavItem></IndexLinkContainer>
              </NavDropdown>

              <NavDropdown eventKey={5} title="Devices" id="basic-nav-dropdown">
                <IndexLinkContainer to='/register-device'><NavItem>Register</NavItem></IndexLinkContainer>
                <IndexLinkContainer to='/configure-device'><NavItem>Configuration</NavItem></IndexLinkContainer>
                <IndexLinkContainer to='/control-device'><NavItem>Control</NavItem></IndexLinkContainer>
                <IndexLinkContainer to='/calibrate-device'><NavItem>Calibrate</NavItem></IndexLinkContainer>
              </NavDropdown>

              <NavDropdown eventKey={6} title="Reporting" id="basic-nav-dropdown">
                <IndexLinkContainer to='/real-time'><NavItem>Real-Time</NavItem></IndexLinkContainer>
                <IndexLinkContainer to='/summary'><NavItem>Historical</NavItem></IndexLinkContainer>
              </NavDropdown>

              <NavDropdown eventKey={7} title="Account" id="basic-nav-dropdown">
                <IndexLinkContainer to='/profile'><NavItem>Profile</NavItem></IndexLinkContainer>
                {/*<IndexLinkContainer to='/subscription'><NavItem>Subscription</NavItem></IndexLinkContainer>*/}
              </NavDropdown>

            </Nav>
            {/*<Nav pullRight>
            <NavItem eventKey={1} href="#">
                {username} - Sign Out
            </NavItem>

          </Nav>}*/}
          </Navbar.Collapse>
        </Navbar>

        <div>

        </div>
      </div>
    );
  }
}

function MainApp() {
  ReactDOM.render(
    <div>
      <ANavbar />
      <Main />
    </div>, document.getElementById("root"));
};

export default ANavbar;
