//ForgotUserNamePW

import React, {Component} from 'react';
import {FormControl, FormGroup, ControlLabel, Form, PageHeader}from 'react-bootstrap';
import Popup from 'reactjs-popup';
import help from './help.png';
import captcha from './reCAPTCHA.png';
import './App.css';
const uname = "Tim E. Anybody";

class ForgotUserNamePWlink extends Component{
    render(){
      return(

        <div>
          {/*header*/}
          <div className="text-center">
          <PageHeader className="h1"> Your User Name is: {uname} </PageHeader>
          </div>

          <br/>

          <div className="text-center">
            {/*new password form*/}
            <Form inline className="rounded">

            <FormGroup controlId="formControlsText">
              <ControlLabel>    Create a New Password     </ControlLabel>
              <FormControl type="password"/>
                  <Popup trigger={<img src={help} alt="help" height='36' width='36' />} position="right center" on="hover">
                    <div>Username must be in the form of a valid email.</div>
                  </Popup>
              </FormGroup>

              <br />

              <FormGroup controlId="formControlsText">
                <ControlLabel>      Confirm Password      </ControlLabel>
                <FormControl type="password"/>
                  <Popup trigger={<img src={help} alt="help" height='36' width='36' />} position="right center" on="hover">
                    <div>Password must have at least one captial, one number, and one symbol.</div>
                  </Popup>
              </FormGroup>
              <br />
              <br />
            </Form>

            <input className= "text-center" type="button" name="Submit" value="Submit"/>
          </div>


        </div>
      )
    }
}

export default ForgotUserNamePWlink;
