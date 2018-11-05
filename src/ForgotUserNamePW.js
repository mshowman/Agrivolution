//ForgotUserNamePW

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {FormControl, FormGroup, ControlLabel, PageHeader}from 'react-bootstrap';
import captcha from './reCAPTCHA.png';
import './App.css';
import ForgotUserNamePWlink from './ForgotUserNamePWlink';

function link(){
  ReactDOM.render(<div> <ForgotUserNamePWlink /> </div>, document.getElementById("root"));
};


class ForgotUserNamePW extends Component{
    render(){
      return(

        <div>
          {/*header*/}
          <div className="text-center">
          <PageHeader className="h1"> Forgot Username or Password? </PageHeader>
          </div>

          <br/>

        {/*enter email form*/}
          <div className="row">
            <div className="col-sm-4"></div>
            <div className="col-sm-4">
              <FormGroup controlId="formControlsEmail">
                <ControlLabel>Please enter your email address</ControlLabel>
                <br/>
                <FormControl placeholder="Someone@email.com" type="email"/>
              </FormGroup>
            </div>
            <div className="col-sm-4"></div>
          </div>

          <br/>

          {/*add in the captcha image*/}
          <div className="row">
            <div className="col-sm-4"></div>
            <img  className="col-sm-4"src={captcha} alt="reCAPTCHA"/>
            <div className="col-sm-4"></div>
          </div>

          <br/>

          {/*add in the continue button*/}
          <div className="row">
            <div className="col-sm-4"></div>
            <input className= "col-sm-4" type="button" name="Continue" value="Continue" onClick={link}/>
            <div className="col-sm-4"></div>
          </div>


        </div>
      )
    }
}

export default ForgotUserNamePW;
