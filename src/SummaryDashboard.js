//summary dashboard.js

import React, { Component } from 'react';
import { PageHeader,Panel,Table} from 'react-bootstrap';

{/*later use this section for the API call to populate the arrays*/}
var testarray = [
  {crop:"Tomato",season:"Fall 2018",yield:10,brule:1},
  {crop:"Lettuce",season:"Fall 2018",yield:50,brule:2},
  {crop:"Cucumber",season:"Fall 2018",yield:100,brule:3},
  {crop:"Carrot",season:"Fall 2018",yield:500,brule:4}
];


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

      {/*later use this section for the API call to populate the arrays*/}
      const farms = [];
      const growAreas = [];
      const devices = [];
      var table = '';

      for (let i = 1; i <6 ; i++) {
        farms.push({
          owner: "Owner "+i,
          name: "Farm "+i
        });
      }

      for(let j = 1; j < 11; j++){
         growAreas.push({
           area: "Area "+j
         });
      }

      for(let k = 1; k < 21; k++){
        devices.push({
          device: "Device "+k
        });
      }

      this.state = { farms,growAreas,devices };
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
                    <select className="form-control">
                            <option>---select---</option>
                              {
                              this.state.farms.map((farmNames, i) =>
                              (<option key={i} value={farmNames}>{farmNames.name+" "+farmNames.owner}</option>))
                              }
                  </select>
                </Panel.Body>
            </Panel>

            <Panel>
              <Panel.Title>List of Grow Areas</Panel.Title>
                <Panel.Body>
                <select className="form-control">
                          <option>---select---</option>
                            {
                            this.state.growAreas.map((ga, i) =>
                            (<option key={i} value={ga}>{ga.area}</option>))
                            }
                </select>
                </Panel.Body>
            </Panel>

            <Panel>
              <Panel.Title>List of Grow Areas</Panel.Title>
                <Panel.Body>
                  <select className="form-control">
                            <option>---select---</option>
                              {
                              this.state.devices.map((d, i) =>
                              (<option key={i} value={d}>{d.device}</option>))
                              }
                  </select>
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
