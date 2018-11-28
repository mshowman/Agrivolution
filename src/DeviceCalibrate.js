import React, { Component } from 'react';
import { DropdownButton, Dropdown,PageHeader, ButtonToolbar,MenuItem,Panel,FormGroup,ControlLabel,FormControl,Table} from 'react-bootstrap';
import Select from 'react-select';

const options = [
  {name:"Device 1",temp:10,humidity:12.5,water:2,light:74,label:'Device1'},
  {name:"Device 2",temp:20,humidity:24.5,water:3,light:75,label:'Device2'},
  {name:"Device 3",temp:30,humidity:32.5,water:5,light:76,label:'Device3'},
  {name:"Device 4",temp:50,humidity:64.5,water:1,light:78,label:'Device4'},
  {name:"Device 5",temp:100,humidity:89.5,water:2,light:79,label:'Device5'},
  {name:"Device 6",temp:90,humidity:22.5,water:6,light:80,label:'Device6'},
  {name:"Device 7",temp:80,humidity:52.5,water:7,light:77,label:'Device7'},
  {name:"Device 8",temp:70,humidity:16.5,water:8,light:76,label:'Device8'},
  {name:"Device 9",temp:60,humidity:79.5,water:9,light:75,label:'Device9'},
  {name:"Device 10",temp:60,humidity:79.5,water:9,light:75,label:'Device10'},
];



function currentTable(array,i){

      return(
        i
          // <tr>
          //   <td>{array[i].temp}</td>
          //   <td>{array[i].humidity}</td>
          //   <td>{array[i].water}</td>
          //   <td>{array[i].light}</td>
          // </tr>

      );

    }


class DeviceCalibrate extends Component {

    constructor(props) {
        super(props);
        const devices = [];
        var value = '';

        for(let k = 1; k < 11; k++){
          devices.push({
            device: "Device "+k
          });
        }

        this.state = {
          devices,
          value,
          selectedOption:''
        };
    }

    handleChange = (selectedOption) => {
      this.setState({ selectedOption });
      console.log(`Option selected:`, selectedOption);
    }

    render() {
      const { selectedOption } = this.state;

        return (


          <div className="page-header" class="text-center">
                    <PageHeader class="text-center">Calibrate Devices</PageHeader>

                <span class="column">
                    <Panel>
                      <Select
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={options}
                        defaulValue='Select'
                      />

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
                  {this.state.selectedOption.temp}
                </Table>
                </span>

            </div>
        );
    }

}

export default DeviceCalibrate;