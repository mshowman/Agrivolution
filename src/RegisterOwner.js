//RegisterOwner.js

import React, {Component} from 'react';
import {FormControl, FormGroup, ControlLabel, Form, PageHeader}from 'react-bootstrap';
import Popup from 'reactjs-popup';
import help from './help.png';
import './App.css';




class RegisterOwner extends Component {
  render(){
      return(

        <div>
          {/*header*/}
          <div className="text-center">
          <PageHeader> Register Owner </PageHeader>

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
            <br />
            <br />
            <input type="button" name="Register" value="Register" />
          </Form>

        </div>
      </div>
    )
    }
}

export default RegisterOwner;
