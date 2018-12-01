import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import './App.css';

class GrowAreaView extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    const styles = {
      padding: "10px",
      width: "100%",
    }

    const farmChoices = [{ value: 1, label: "Farm 1" }, { value: 2, label: "Farm 2" }, { value: 3, label: "Farm 3" }];
    const growAreaChoices = [{ value: 1, label: "Grow Area 1" }, { value: 2, label: "Grow Area 2" }, { value: 3, label: "Grow Area 3" }];

    this.state = {
      showGrowModal: false,
      showYieldModal: false,
      styles,
      farmChoices,
      growAreaChoices,
    }
  }

  toggle(type) {
    if (type === "yield") {
      this.setState({ showYieldModal: !this.state.showYieldModal });
    } else {
      this.setState({ showGrowModal: !this.state.showGrowModal });
    }
  }

  handleFarmChange = (selectedFarmOption) => {
    this.setState({ selectedFarmOption });
  }

  handleGrowAreaChange = (selectedGrowAreaOption) => {
    this.setState({ selectedGrowAreaOption });
  }

  render() {
    return (
      <div>
        <div>
          <table width="40%" align="center">
            <caption>
              <Button bsStyle="success" onClick={this.toggle}>{this.props.name}</Button>
              <Button onClick={this.toggle("yield")}>Report Yield</Button>
            </caption>
            <tbody>
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
            </tbody>
          </table>
        </div>
        <div>
          <Modal show={this.state.showYieldModal}>
            <Modal.Header>
              <Modal.Title>Report Yield for Grow Area</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Select Farm</h4>
              <Select
                value={this.state.selectedFarmOption}
                onChange={this.handleFarmChange}
                options={this.state.farmChoices}
                defaulValue='--Select--'
              />
              <br />
              <h4>Select Grow Area</h4>
              <Select
                value={this.state.selectedGrowAreaOption}
                onChange={this.handleGrowAreaChange}
                options={this.state.growAreaChoices}
                defaulValue='--Select--'
              />
              <br />
              <h4>Yield:</h4><input type="text" name="yield" /><br />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.toggle}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
        
        <div>
          <Modal show={this.state.showGrowModal}>
            <Modal.Header>
              <Modal.Title>{this.props.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <table style={this.state.styles}>
                <tbody>
                  <tr>
                    <th>Device</th>
                    <th>Status</th>
                    <th>Perform Action?</th>
                  </tr>
                  <tr>
                    <td>Temperature Gauge 8</td>
                    <td>Offline</td>
                    <td><Link to="/control-device" onClick={this.toggle}>Peform Action</Link></td>
                  </tr>
                  <tr>
                    <td>Humidity Gauge 1</td>
                    <td>70%</td>
                    <td><Link to="/control-device" onClick={this.toggle}>Peform Action</Link></td>
                  </tr>
                  <tr>
                    <td>Water Gauge 21</td>
                    <td>2 mL/m</td>
                    <td><Link to="/control-device" onClick={this.toggle}>Peform Action</Link></td>
                  </tr>
                </tbody>
              </table>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.toggle}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }
}

export default GrowAreaView;
