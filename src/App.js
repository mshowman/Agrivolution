import React, { Component } from 'react';
import logo from './agrivolutionLogo.png';
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
            </label>
            <br />
            <label>
              Password:
              <input type="password" name="password" />
            </label>
            <br />
            <input type="button" name="Submit" value="Submit" />
          </form>
        </header>
      </div>
    );
  }
}

export default App;
