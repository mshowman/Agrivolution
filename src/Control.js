//Control.js

import React, { Component } from 'react';
import { PageHeader,Panel,Table, Col,Row} from 'react-bootstrap';
import Select from 'react-select';
import Switch from "react-switch";


const devices=[];
const styles = {
  resize: {
    width: "50%",
    margin: "auto"
  }
};


class Control extends Component{
  constructor(props){
    super(props);

    for (let i=1;i<11;i++){
      devices.push(
        {name:"Device " + i,
        label:"Device " + i
        }
      );

      this.state = {
          devices,
          checked: false
      };
      this.handleChange = this.handleChange.bind(this);

    }
}


handleChange(checked) {
  this.setState({ checked });
}

  render(){
    return(

      <div className="page-header" class="text-center" >
                <PageHeader class="text-center">Control Devices</PageHeader>

      <div style={styles.resize}>

      <Col md={6} lg={6} mdPull={6} lg={6}>
          <Panel>
            devices.forEach(function(device){
                <Row>
                  <Col>device.name</Col>
                  <Col>
                    <label htmlFor="normal-switch">
                      <span>Off   On</span>
                      <Switch
                        onChange={this.handleChange}
                        checked={this.state.checked}
                        id="normal-switch"
                      />
                    </label>
                  </Col>
                </Row>
              });


          </Panel>

        </Col>


        <Col md={6} lg={6} mdPull={6} lg={6}>
          <h2>Device Status:</h2>
          <br />
          <Table>
            <thead>
              <tr>
                <th>Temperature</th>
                <th>Humidity</th>
                <th>Water Level</th>
               <th>Light Level</th>
              </tr>
            </thead>

          {/*  <tr>
               <td>{this.state.selectedOption.temp}</td>
               <td>{this.state.selectedOption.humidity}</td>
               <td>{this.state.selectedOption.water}</td>
               <td>{this.state.selectedOption.light}</td>
             </tr>
            */}

          </Table>

          </Col>
        </div>
      </div>

    );
  }

}
export default Control;
