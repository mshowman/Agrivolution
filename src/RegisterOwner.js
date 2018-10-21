//RegisterOwner.js

import React, {Component} from 'react';
import {FormControl, FormGroup, ControlLabel, Form }from 'react-bootstrap';
import Popup from 'reactjs-popup';
import help from './help.png';
import './App.css';
const h1Green = {};



class RegisterOwner extends Component {
  render(){
      return(

        <div>
          {/*header*/}
          <div className="text-center">
            <h1> Register Owner </h1>

          {/*build the form for first name, last name, email, and password*/}
          <Form inline>

            <div class="text-center">
              <FormGroup controlId="formControlsText">
                <ControlLabel>First Name:</ControlLabel>
                <FormControl placeholder="First" type="text"/>
              </FormGroup>
            </div>

            <div class="text-center">
              <FormGroup controlId="formControlsText">
                <ControlLabel>Last Name:</ControlLabel>
                <FormControl placeholder="Last" type="email"/>
              </FormGroup>
            </div>

            <br/>

            <div class="text-center">
              <FormGroup controlId="formControlsText">
                <ControlLabel>   Phone:</ControlLabel>
                <FormControl placeholder="098-765-4321" type="tel"/>
              </FormGroup>
            </div>

            <div class="text-center">
              <FormGroup controlId="formControlsEmail">
                <ControlLabel>   Email:</ControlLabel>
                <FormControl placeholder="Someone@email.com" type="email"/>
              </FormGroup>
            </div>

            <br/>

          </Form>

          <hr/>

          <form>
            <label>
              Username:
              <input type="text" name="username" />
                <Popup trigger={<img src={help} alt="help" height='36' width='36' />} position="right center" on="hover">
                  <div>Username must be in the form of a valid email.</div>
                </Popup>
            </label>

            <br />

            <label>
              Password:
              <input type="password" name="password" />
                <Popup trigger={<img src={help} alt="help" height='36' width='36' />} position="right center" on="hover">
                  <div>Password must have at least one captial, one number, and one symbol.</div>
                </Popup>
            </label>

            <br />
            <br />
            <input type="button" name="Register" value="Register" />
          </form>

        </div>
      </div>
    )
    }
}

export default RegisterOwner;
