import React from 'react';

import './App.css';

class GrowAreaView extends React.Component {

  render() {
    return (
      <div>
        <div>
          <table width="40%" align="center">
            <caption>{this.props.name}</caption>
            <tr>
              <th>Device</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>Temperature Gauge 8</td>
              <td>Offline</td>
            </tr>
            <tr>
              <td>Humidity Gauge 1</td>
              <td>70%</td>
            </tr>
            <tr>
              <td>Water Gauge 21</td>
              <td>2 mL/m</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default GrowAreaView;
