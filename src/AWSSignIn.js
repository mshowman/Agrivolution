import React, { Component } from 'react';
import ANavbar from './ANavbar';
import Dashboard from './Dashboard';
//import './App.css';
import { withAuthenticator } from 'aws-amplify-react';

class AWSSignIn extends Component {
  render() {
    return (
      <div>
        <ANavbar />
        <Dashboard />
      </div>
    )
  };
}

export default withAuthenticator(AWSSignIn, true);
