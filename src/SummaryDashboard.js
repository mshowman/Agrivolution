//summary dashboard.js

import React, { Component } from 'react';
import { DropdownButton, Dropdown,PageHeader, ButtonToolbar,MenuItem} from 'react-bootstrap';


const farmNames = {
                      Description: 'Farm 1',
                      Description: 'Farm 2'
        };

class SummaryDashboard extends Component{
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
                            this.farmNames.map((v, i) =>
                            (<option key={i} value={v.Description}>{v.Description}</option>))
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
