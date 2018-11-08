//summary dashboard.js

import React, { Component } from 'react';
import { DropdownButton, Dropdown,PageHeader, ButtonToolbar,MenuItem} from 'react-bootstrap';
import chance from 'chance';

const farmNames = [];

class SummaryDashboard extends Component{
  constructor(props) {
      super(props);

      for (let i = 0; i < 20; i++) {
          farmNames.push({
              owner: chance.first(),
              name: "Farm "+i
          });
      }

      this.state = { farmNames };
  }
    render(){
        return(

          <div class="text-center">
              <ButtonToolbar>
                <DropdownButton
                  bsSize="large"
                  title="List of Farms"
                  id="dropdown-size-large"
                >
                <select className="form-control">
                          <option>---select---</option>
                            {
                            this.state.farmNames.map((farmNames, i) =>
                            (<option key={i} value={farmNames}>{"Farm: " + farmNames}</option>))
                            }
                </select>
                </DropdownButton>
              </ButtonToolbar>

              <ButtonToolbar>
                <DropdownButton title="Grow Area" id="dropdown-size-medium">
                </DropdownButton>
              </ButtonToolbar>

              <ButtonToolbar>
                <DropdownButton
                  bsSize="small"
                  title="Devices"
                  id="dropdown-size-small"
                >
                </DropdownButton>
              </ButtonToolbar>

          </div>

        );
    }
}



export default SummaryDashboard;
