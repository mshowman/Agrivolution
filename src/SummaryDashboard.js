//summary dashboard.js

import React, { Component } from 'react';
import { PageHeader,Panel,Table} from 'react-bootstrap';
import Select from 'react-select';

{/*later use this section for the API call to populate the arrays*/}
var testarray = [
  {crop:"Tomato",season:"Fall 2018",yield:10,brule:1},
  {crop:"Lettuce",season:"Fall 2018",yield:50,brule:2},
  {crop:"Cucumber",season:"Fall 2018",yield:100,brule:3},
  {crop:"Carrot",season:"Fall 2018",yield:500,brule:4}
];
{/*later use this section for the API call to populate the arrays*/}
const farms = [
  {owner: "Ann ", name: "Farm 1",label:"Farm 1"},
  {owner: "Bob ", name: "Farm 2",label:"Farm 2"},
  {owner: "Cat ", name: "Farm 3",label:"Farm 3"},
  {owner: "Dan ", name: "Farm 4",label:"Farm 4"},
  {owner: "Eve ", name: "Farm 5",label:"Farm 5"}
];

const growAreas = [
  {area:"Area 1",label:"Area 1"},
  {area:"Area 2",label:"Area 2"},
  {area:"Area 3",label:"Area 3"},
  {area:"Area 4",label:"Area 4"},
  {area:"Area 5",label:"Area 5"},
  {area:"Area 6",label:"Area 6"},
  {area:"Area 7",label:"Area 7"}
];

const devices = [
  {device:"Device 1",label:"Device 1"},
  {device:"Device 2",label:"Device 2"},
  {device:"Device 3",label:"Device 3"},
  {device:"Device 4",label:"Device 4"},
  {device:"Device 5",label:"Device 5"},
  {device:"Device 6",label:"Device 6"},
  {device:"Device 7",label:"Device 7"},
  {device:"Device 8",label:"Device 8"},
  {device:"Device 9",label:"Device 9"},
  {device:"Device 10",label:"Device 10"},
  {device:"Device 11",label:"Device 11"},

];
var table = '';


function currentTable(array){

 return(
      array.map((v) =>
          <tr>
            <td>{v.crop}</td>
            <td>{v.season}</td>
            <td>{v.yield}</td>
            <td>{v.brule}</td>
          </tr>
        )
      );
}

class SummaryDashboard extends Component{
  constructor(props) {
      super(props);
      const selectedOption = '';
      this.state = { farms,growAreas,devices, selectedOption};
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  }

    render(){

        return(

          <div class="text-center">
            {/*header*/}
            <div className="text-center">
            <PageHeader className="h1"> Historical Summary </PageHeader>
            </div>

          <div className="row">

          <div className="col-sm-4"></div>
          <div className="col-sm-4">



          {/* This is the section for the Panels of choices*/}
            <Panel>
              <Panel.Title>List of Farms</Panel.Title>
                <Panel.Body>
                <Select
                    options={farms}
                    onChange={this.handleChange}
                />
                </Panel.Body>
            </Panel>

            <Panel>
              <Panel.Title>List of Grow Areas</Panel.Title>
                <Panel.Body>
                <Select
                    options={growAreas}
                    onChange={this.handleChange}
                />
                </Panel.Body>
            </Panel>

            <Panel>
              <Panel.Title>List of Devices</Panel.Title>
                <Panel.Body>
                <Select
                    options={devices}
                    onChange={this.handleChange}
                />
                </Panel.Body>
            </Panel>

              </div>
              <div className="col-sm-4"></div>
          </div>


          <div className="row">
          <br/>

            <Panel>
              <Panel.Title>Current</Panel.Title>
              <Panel.Body>
              {/*
                */}

                <Table striped bordered condensed hover>
                  <thead>
                    <tr>
                      <th>Crop</th>
                      <th>Season</th>
                      <th>Yield</th>
                      <th>Business Rule</th>
                    </tr>
                  </thead>
                {currentTable(testarray)}
                </Table>
              </Panel.Body>
            </Panel>
          </div>

          </div>



        );
    }
}

export default SummaryDashboard;
