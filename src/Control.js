//Control.js

import React, { Component } from 'react';
import { PageHeader,Panel,Table, Col,Row,Grid} from 'react-bootstrap';
import Select from 'react-select';
import Switch from "react-switch";


const devices=[
  {name:"Device 1",type:"temp",temp:10,humidity:12.5,water:2,light:74,label:'Device1'},
  {name:"Device 2",type:"temp",temp:20,humidity:24.5,water:3,light:75,label:'Device2'},
  {name:"Device 3",type:"humidity",temp:30,humidity:32.5,water:5,light:76,label:'Device3'},
  {name:"Device 4",temp:50,humidity:64.5,water:1,light:78,label:'Device4'},
  {name:"Device 5",temp:100,humidity:89.5,water:2,light:79,label:'Device5'},
  {name:"Device 6",temp:90,humidity:22.5,water:6,light:80,label:'Device6'},
  {name:"Device 7",temp:80,humidity:52.5,water:7,light:77,label:'Device7'},
  {name:"Device 8",temp:70,humidity:16.5,water:8,light:76,label:'Device8'},
  {name:"Device 9",temp:60,humidity:79.5,water:9,light:75,label:'Device9'},
  {name:"Device 10",temp:60,humidity:79.5,water:9,light:75,label:'Device10'},
];

const styles = {
  resize: {
    width: "50%",
    margin: "auto"
  }
};


class Control extends Component{
  constructor(props){
    super(props);

      this.state = {
          devices,
          checked: false
      };
      this.handleChange = this.handleChange.bind(this);

    }


handleChange( checked) {
  this.setState({ checked });
}

  render(){
    return(

      <div className="page-header" class="text-center" >
                <PageHeader class="text-center">Control Devices</PageHeader>

      <div style={styles.resize}>


        {
          this.state.devices.map((device) =>
            (
              <div>
                <Grid>
                <Row>
                  <Col>{device.name}</Col>
                  <Col>
                    <Switch
                      onChange={this.handleChange}
                      checked={this.state.checked}
                      id="normal-switch"
                    />
                    <span>Off   On</span>
                  </Col>
                </Row>
                </Grid>
            </div>
            )
          )
        }

        <Col >
          <h2>Device Status:</h2>
          <br />
          <Table>
            <thead>
              <tr>
                <th>Device Type</th>
                <th>Value</th>
              </tr>
            </thead>
          </Table>
        </Col>

      </div>

    </div>
    );
  }

}
export default Control;
