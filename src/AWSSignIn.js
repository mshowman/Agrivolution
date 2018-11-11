import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ANavbar from './ANavbar';
import Dashboard from './Dashboard';
import './App.css';



import { withAuthenticator } from 'aws-amplify-react';



class App extends Component {
 
  
  render() {
    return (
      ReactDOM.render(<div><ANavbar /><Dashboard /></div>, document.getElementById("root"))
    );
  }
}

export default withAuthenticator(App);
