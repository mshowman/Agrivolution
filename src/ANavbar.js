//AgrivolutionNavbarComponent class
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap';
import logo from './agrivolutionLogo.png';
import './ANavbar.css';
import RegisterUser from './RegisterUser.js';
import Dashboard from './Dashboard.js';
import RealTime from './RealTime.js';
import RegisterFarm from './RegisterFarm';
import AccountProfile from './AccountProfile';
import SummaryDashboard from './SummaryDashboard';
import GrowArea from './GrowArea';
import CropCycle from './CropCycle';

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

class ANavbar extends Component{
  render(){
  return(
      //Create the NAV menu bar
      <Navbar collapseOnSelect>
        <Navbar.Header>
           <Navbar.Brand pullLeft>
            <img  src={logo} onClick={MainApp} href="#" alt="logo" />
           </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav >

            <NavDropdown eventKey={3} title="Farms" id="basic-nav-dropdown"  >
              <MenuItem eventKey={3.1} onClick={registerFarm}>Register</MenuItem>
              <MenuItem eventKey={3.2} onClick={growArea}>Create Grow Area</MenuItem>
              <MenuItem eventKey={3.3} onClick={cropCycle}>Create Crop Cycle</MenuItem>
              <MenuItem eventKey={3.4}>Business Rules</MenuItem>
            </NavDropdown>

            <NavDropdown eventKey={4} title="Users" id="basic-nav-dropdown">
              <MenuItem eventKey={4.1} onClick={register}>Register</MenuItem>
            </NavDropdown>

            <NavDropdown eventKey={5} title="Devices" id="basic-nav-dropdown">
              <MenuItem eventKey={5.1}>Register</MenuItem>
              <MenuItem eventKey={5.2}>Configuration</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={5.3}>Control</MenuItem>
              <MenuItem eventKey={5.4}>Calibrate</MenuItem>
            </NavDropdown>

            <NavDropdown eventKey={6} title="Reporting" id="basic-nav-dropdown">
              <MenuItem eventKey={6.1} onClick={realTimeStatus} >Real-Time</MenuItem>
              <MenuItem eventKey={6.2} onClick={sumDash} >Historical </MenuItem>
            </NavDropdown>

            <NavDropdown eventKey={7} title="Account" id="basic-nav-dropdown">
              <MenuItem eventKey={7.1} onClick={accountProfile}>Profile</MenuItem>
              <MenuItem eventKey={7.2}>Subscription</MenuItem>
            </NavDropdown>

          </Nav>
          {/*<Nav pullRight>
            <NavItem eventKey={1} href="#">
                {username} - Sign Out
            </NavItem>

          </Nav>}*/}
        </Navbar.Collapse>
      </Navbar>

    );
  }
}

function register(){
  ReactDOM.render(<div> <ANavbar /> <RegisterUser /></div>, document.getElementById("root"));
};

function realTimeStatus(){
  ReactDOM.render(<div> <ANavbar /> <RealTime /> </div>, document.getElementById("root"));
}

function registerFarm(){
  ReactDOM.render(<div><ANavbar /> <RegisterFarm /></div>, document.getElementById("root"));
}

function MainApp(){
  ReactDOM.render(<div> <ANavbar /> <Dashboard /></div>, document.getElementById("root"));
};

function accountProfile(){
  ReactDOM.render(<div> <ANavbar /> <AccountProfile /></div>, document.getElementById("root"));
};

function sumDash(){
  ReactDOM.render(<div> <ANavbar /> <SummaryDashboard /></div>, document.getElementById("root"));
};

function growArea(){
  ReactDOM.render(<div> <ANavbar /> <GrowArea /></div>, document.getElementById("root"));
};

function cropCycle(){
  ReactDOM.render(<div> <ANavbar /> <CropCycle /></div>, document.getElementById("root"));
};

export default ANavbar;
