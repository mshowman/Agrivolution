import React, { Component } from 'react';
import ANavbar from './ANavbar';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react';
import Main from './Main';

class AWSSignIn extends Component {
  render() {
    return (
      <div>
        <ANavbar />
        <Main />
      </div>
    )
  };
}

export default withAuthenticator(AWSSignIn, true);
