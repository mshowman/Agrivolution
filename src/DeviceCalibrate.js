import React, { Component } from 'react';
import { DropdownButton, Dropdown,PageHeader, ButtonToolbar,MenuItem,Panel,FormGroup,ControlLabel,FormControl,Table} from 'react-bootstrap';
import Select from 'react-select';
import DeviceSlider from './Slider';

const styles = {
  resize: {
    width: "50%",
    margin: "auto"
  }
};


const options = [
<<<<<<< HEAD
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
=======
  {value:"Device 1",temp:10,humidity:12.5,water:2,light:74,label:'Device1'},
  {value:"Device 2",temp:20,humidity:24.5,water:3,light:75,label:'Device2'},
  {value:"Device 3",temp:30,humidity:32.5,water:5,light:76,label:'Device3'},
  {value:"Device 4",temp:50,humidity:64.5,water:1,light:78,label:'Device4'},
  {value:"Device 5",temp:100,humidity:89.5,water:2,light:79,label:'Device5'},
  {value:"Device 6",temp:90,humidity:22.5,water:6,light:80,label:'Device6'},
  {value:"Device 7",temp:80,humidity:52.5,water:7,light:77,label:'Device7'},
  {value:"Device 8",temp:70,humidity:16.5,water:8,light:76,label:'Device8'},
  {value:"Device 9",temp:60,humidity:79.5,water:9,light:75,label:'Device9'},
  {value:"Device 10",temp:60,humidity:79.5,water:9,light:75,label:'Device10'},
>>>>>>> changed name: to value: for select focus to work
];


function currentTable(array,i){

      return(i);

    }


class DeviceCalibrate extends Component {

    constructor(props) {
        super(props);
        const selectedOption = '';

        this.state = {
          selectedOption:''
        };
    }

    handleChange = (selectedOption) => {
      this.setState({ selectedOption });
      console.log(`Option selected:`, selectedOption);
    }



    render() {

        return (

<<<<<<< HEAD
          <div className="page-header" class="text-center" >
=======

          <div classvalue="page-header" class="text-center">
>>>>>>> changed name: to value: for select focus to work
                    <PageHeader class="text-center">Calibrate Devices</PageHeader>

          <div style={styles.resize}>

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

                <tr>
                   <td>{this.state.selectedOption.temp}</td>
                   <td>{this.state.selectedOption.humidity}</td>
                   <td>{this.state.selectedOption.water}</td>
                   <td>{this.state.selectedOption.light}</td>
                 </tr>

              </Table>

              <br />
              <p>Move the slider to calibrate the device.</p>
              <DeviceSlider default={this.state.selectedOption.temp}/>
              <DeviceSlider default={this.state.selectedOption.humidity} />
              <DeviceSlider default={this.state.selectedOption.water} />
              <DeviceSlider default={this.state.selectedOption.light} />


              <br />

                      <Select
                        onChange={this.handleChange}
                        options={options}
                        autofocus
                      />

                </div>


            </div>
        );
    }

}

export default DeviceCalibrate;
