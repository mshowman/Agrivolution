//RegisterOwner.js

import React, {Component} from 'react';
import {FormControl, FormGroup, ControlLabel }from 'react-bootstrap';
import Popup from 'reactjs-popup';
import help from './help.png';

const h1Green = {color:'#0080000'};



class RegisterOwner extends Component {
  render(){
      return(
      <div className="text-center">
      <h1 class="h1Green"> Register Owner </h1>

      <div className="text-center">


      <form >

        <FormGroup controlId="formControlsEmail">
          <ControlLabel>"email"</ControlLabel>
          <FormControl
            placeholder="Enter Email Address"
            type="email"
          />
        </FormGroup>

        <FormGroup controlId="formControlsPassword">
          <ControlLabel>"password"</ControlLabel>
          <FormControl
            placeholder="Enter Password"
            type="password"
          />
        </FormGroup>


            <label >Email Address:</label>
            <input type="email"  id="email" />
            <br/>
            <label >Password:</label>
            <input type="password" id="pwd" />


          <div class="checkbox">
            <label><input type="checkbox" /> Remember me</label>
          </div>

        </form>


        <form>
          <label>
            Username:
            <input type="text" name="username" />
              <Popup trigger={<img src={help} alt="help" height='36' width='36' />} position="right center">
                <div>Username must be in the form of a valid email.</div>
              </Popup>
          </label>
          <br />
          <label>
            Password:
            <input type="password" name="password" />
              <Popup trigger={<img src={help} alt="help" height='36' width='36' />} position="right center">
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
