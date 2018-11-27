import React, { Component } from 'react';
import { DropdownButton, Dropdown,PageHeader, ButtonToolbar,MenuItem,Panel,FormGroup,ControlLabel,FormControl,Table} from 'react-bootstrap';

var testDeviceArray = [
  {name:"Device 1",temp:10,humidity:12.5,water:2,light:74},
  {name:"Device 2",temp:20,humidity:24.5,water:3,light:75},
  {name:"Device 3",temp:30,humidity:32.5,water:5,light:76},
  {name:"Device 3",temp:40,humidity:48.5,water:7,light:77},
  {name:"Device 4",temp:50,humidity:64.5,water:1,light:78},
  {name:"Device 5",temp:100,humidity:89.5,water:2,light:79},
  {name:"Device 6",temp:90,humidity:22.5,water:6,light:80},
  {name:"Device 7",temp:80,humidity:52.5,water:7,light:77},
  {name:"Device 8",temp:70,humidity:16.5,water:8,light:76},
  {name:"Device 9",temp:60,humidity:79.5,water:9,light:75},
  {name:"Device 10",temp:60,humidity:79.5,water:9,light:75},
];

function currentTable(array,check){
    for( var a in array.name ){
        if(a === check){
      return(

      array.map((c) =>
          <tr>
            <td>{c.temp}</td>
            <td>{c.humidity}</td>
            <td>{c.water}</td>
            <td>{c.light}</td>
          </tr>
        )

      );
    }
    }
}

class DeviceCalibrate extends Component {

    constructor(props) {
        super(props);
        const devices = [];

        this.handleChange = this.handleChange.bind(this);

        for(let k = 1; k < 11; k++){
          devices.push({
            device: "Device "+k
          });
        }

        this.state = {
          devices,
          value: ''
        };
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
      }
    render() {
        return (
          <div className="page-header" class="text-center">
                    <PageHeader class="text-center">Calibrate Devices</PageHeader>

                <span class="column">
                    <Panel>
                    <FormGroup controlId="formControlsSelect">
                      <ControlLabel>Select</ControlLabel>
                      <FormControl componentClass="select" placeholder="select" onChange={this.handleChange}>
                            <option>---select---</option>
                              {
                              this.state.devices.map((d, i) =>
                              (<option key={i} value={d}>{d.device}</option>))
                              }
                          </FormControl>
                        </FormGroup>
                    </Panel>


                </span>



                <span class="column">
                <h1>Device Status:</h1>
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
                  {currentTable(testDeviceArray,this.state.value)}
                </Table>
                </span>

            </div>
        );
    }

}

export default DeviceCalibrate;
