import React, { Component } from 'react';
import Farm from './Farm';



class Dashboard extends Component {
  render() {
    return (
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
