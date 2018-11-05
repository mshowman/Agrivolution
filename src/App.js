import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {FormControl, FormGroup, ControlLabel, Form }from 'react-bootstrap';
import Popup from 'reactjs-popup';
import logo from './agrivolutionLogo.png';
import bigLogo from './Agrivolution-Logo.svg';
import help from './help.png';
import './App.css';
//import components
import Dashboard from './Dashboard';
import ANavbar from './ANavbar.js'
import RegisterOwner from './RegisterOwner.js';
import ForgotUserNamePW from './ForgotUserNamePW.js';


function login(){
  ReactDOM.render(<div> <ANavbar /> <Dashboard /></div>, document.getElementById("root"));
};

function register(){
  ReactDOM.render(<div> <ANavbar /> <RegisterOwner /></div>, document.getElementById("root"));
};

function forgot(){
  ReactDOM.render(<ForgotUserNamePW />, document.getElementById("root"));
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img  src={bigLogo} className="App-logo" alt="logo" />

          <Form inline className="rounded">

          <FormGroup controlId="formControlsText">
            <ControlLabel>Username:</ControlLabel>
            <FormControl type="text"/>
                <Popup trigger={<img src={help} alt="help" height='36' width='36' />} position="right center" on="hover">
                  <div>Username must be in the form of a valid email.</div>
                </Popup>
            </FormGroup>

            <br />

            <FormGroup controlId="formControlsText">
              <ControlLabel>Password:</ControlLabel>
              <FormControl type="password"/>
                <Popup trigger={<img src={help} alt="help" height='36' width='36' />} position="right center" on="hover">
                  <div>Password must have at least one captial, one number, and one symbol.</div>
                </Popup>
            </FormGroup>

            <br/>
            <input type="button" name="SignIn" value="Sign-In" onClick={login} />
            <input type="button" name="Register" value="Register" onClick={register} />
          </Form>

          <br/>
          <br/>

          <a onClick={forgot} href="#">Forgot username or password?</a>

        </header>
      </div>
    );
  }
}

export default App;
