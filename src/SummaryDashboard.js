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

          <div>
            {/*header*/}
            <div className="text-center">
            <PageHeader className="h1"> Historical Summary </PageHeader>
            </div>

          <div class="text-center">
              <ButtonToolbar>
                <DropdownButton
                  bsSize="large"
                  title="List of Farms"
                  id="dropdown-size-large"
                  class="text-center"
                >
                <select className="form-control">
                          <option>---select---</option>
                            {
                            this.state.farms.map((farmNames, i) =>
                            (<option key={i} value={farmNames}>{farmNames.name+" "+farmNames.owner}</option>))
                            }
                </select>
                </DropdownButton>
              </ButtonToolbar>

              <ButtonToolbar>
                <DropdownButton
                  title="Grow Area"
                  id="dropdown-size-medium"
                  class="text-center"
                >
                <select className="form-control">
                          <option>---select---</option>
                            {
                            this.state.growAreas.map((ga, i) =>
                            (<option key={i} value={ga}>{ga.area}</option>))
                            }
                </select>
                </DropdownButton>
              </ButtonToolbar>

              <ButtonToolbar>
                <DropdownButton
                  bsSize="small"
                  title="Devices"
                  id="dropdown-size-small"
                  class="text-center"
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
          </div>

        );
    }
}



export default SummaryDashboard;
