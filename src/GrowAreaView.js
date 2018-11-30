import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './App.css';

class GrowAreaView extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    const styles = {
      padding: "10px",
      width: "100%",
    }

    this.state = {
      showModal: false,
      styles
    }
  }

  toggle() {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    return (
      <div>
        <div>
          <table width="40%" align="center">
            <caption><Button bsStyle="success" onClick={this.toggle}>{this.props.name}</Button></caption>
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
          <Modal show={this.state.showModal}>
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
