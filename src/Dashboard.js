import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './agrivolutionLogo.png';
import Farm from './Farm';
//import './App.css';



class Dashboard extends Component {
  render() {
    return (

      //Create the NAV menu bar
      <div>

      <div><Farm name="1-NE" /></div>
      <div><Farm name="1-NW" /></div>
      <div><Farm name="2-NW" /></div>
      <div><Farm name="1-SE" /></div>
    </div>
    );
  }
}

export default Dashboard;
