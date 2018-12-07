//Control.js

import React, { Component } from 'react';
import { PageHeader, Table, Col, Row, Grid, } from 'react-bootstrap';
import Switch from "react-switch";

var d2 = '';

var devices = [
  { value: "Device 1", type: "Temperature", reading: 10, label: 'Device1', status: false },
  { value: "Device 2", type: "Temperature", reading: 20, label: 'Device2', status: true },
  { value: "Device 3", type: "Humidity", reading: 32.5, label: 'Device3', status: true },
  { value: "Device 4", type: "Humidity", reading: 68.4, label: 'Device4', status: true },
  { value: "Device 5", type: "Water Level", reading: 2, label: 'Device5', status: true },
  { value: "Device 6", type: "Water Level", reading: 6, label: 'Device6', status: false },
  { value: "Device 7", type: "Light Level", reading: 77, label: 'Device7', status: true },
  { value: "Device 8", type: "Light Level", reading: 79, label: 'Device8', status: false },
  { value: "Device 9", type: "Humidity", reading: 79.5, label: 'Device9', status: true },
  { value: "Device 10", type: "Temperature", reading: 15, label: 'Device10', status: true },
];

const styles = {
  resize: {
    width: "50%",
    margin: "auto"
  }
};


class SwitchButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      device: this.props.device,
      checked: this.props.status,
      devices: this.props.devicesArray,
      masterStatus: false,
    };

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(checked) {
    if (this.state.device.value === "Master Switch") {
      this.setState({ checked: checked });
      this.setState({ masterSwitch: checked })
    } else {
      this.setState({ checked })
      this.setState({ status: this.checked });
      return this.status;
    }
  }

  createButtonType() {
    if (this.state.masterStatus === true) {
      return (<Switch
        onChange={this.handleChange}
        checked={false}
        id="normal-switch"
      />);
    } else {
      return (<Switch
        onChange={this.handleChange}
        checked={this.state.checked}
        id="normal-switch"
      />);
    }
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col sm={6} md={3}>{this.state.device.value}</Col>
          <Col>
            {this.createButtonType()}
            <span>Off   On</span>
          </Col>
        </Row>
      </Grid>
    );
  }
}



class Control extends Component {
  constructor(props) {
    super(props);


    this.state = {
      devices,
      masterSwitch: false,
      d2,
    };

  }

  valueOfTrue() {
   return(
    this.state.devices
      .filter(d => d.status === true)
      .map(d2 =>
        <tr>
          <td>{d2.value}</td>
          <td>{d2.type}</td>
          <td>{d2.reading}</td>
        </tr>)
      );
      
  }


  render() {
    if (this.state.masterSwitch === false) {
      return (

        <div className="page-header" class="text-center" >
          <PageHeader class="text-center">Control Devices</PageHeader>

          <div style={styles.resize}>

            <SwitchButton devicesArray={this.state.devices} device={{ value: "Master Switch", label: 'Master' }} />
            {
              this.state.devices.map((device, i) =>
                (
                  <SwitchButton device={device} status={device.status} />
                )
              )
            }

            <Col >
              <h2>Device Status:</h2>
              <br />
              <Table>
                <thead>
                  <tr>
                    <th>Device Name</th>
                    <th>Device Type</th>
                    <th>Value</th>
                  </tr>
                </thead>
                  <tbody>{this.valueOfTrue()}</tbody>
              </Table>
            </Col>

          </div>

        </div>
      );
    } else {
      return (
        <p>Does not work</p>
      );
    }
  }

}
export default Control;