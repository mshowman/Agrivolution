import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import logo from './agrivolutionLogo.png';
import help from './help.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img  src={logo} className="App-logo" alt="logo" />
          <form>
            <label>
              Username:
              <input type="text" name="username" />
                <Popup trigger={<img src={help} alt="help" height="36" width="36" />} position="right center" on="hover">
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
            <input type="button" name="SignIn" value="Sign-In" />
            <input type="button" name="Register" value="Register" />
          </form>
        </header>
      </div>
    );
  }
}

export default App;
