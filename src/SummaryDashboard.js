//summary dashboard.js

import React, { Component } from 'react';
import { DropdownButton, Dropdown,PageHeader, ButtonToolbar,MenuItem} from 'react-bootstrap';
import {chance} from 'chance';

class SummaryDashboard extends Component{
  constructor(props) {
      super(props);

      const farms = [];
      const growAreas = [];
      const devices = [];

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

          <div>
          <div className="col-sm-4"></div>
          <div className="col-sm-4">
              <ButtonToolbar class="text-center">
                <DropdownButton
                  bsSize="large"
                  title="List of Farms"
                  id="dropdown-size-large"
                >
                <select className="form-control">
                          <option>---select---</option>
                            {
                            this.state.farms.map((farmNames, i) =>
                            (<option key={i} value={farmNames}>{farmNames.name+" "+farmNames.owner}</option>))
                            }
                </select>
                </DropdownButton>

                <DropdownButton
                  title="Grow Area"
                  id="dropdown-size-medium"
                >
                <select className="form-control">
                          <option>---select---</option>
                            {
                            this.state.growAreas.map((ga, i) =>
                            (<option key={i} value={ga}>{ga.area}</option>))
                            }
                </select>
                </DropdownButton>

                <DropdownButton
                  bsSize="small"
                  title="Devices"
                  id="dropdown-size-small"
                >
                <select className="form-control">
                          <option>---select---</option>
                            {
                            this.state.devices.map((d, i) =>
                            (<option key={i} value={d}>{d.device}</option>))
                            }
                </select>
                </DropdownButton>
              </ButtonToolbar>
              </div>
              <div className="col-sm-4"></div>

          </div>
          </div>

        );
    }
}



export default SummaryDashboard;
