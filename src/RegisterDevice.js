//RegisterDevice.js


import React, { Component } from 'react';
import { DropdownButton, Dropdown,PageHeader, ButtonToolbar,MenuItem,Panel,FormGroup,ControlLabel,FormControl} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import ANavbar from './ANavbar';
import Dashboard from './Dashboard';


class RegisterDevice extends Component {

    constructor(props) {
        super(props);
        {/*later use this section for the API call to populate the arrays*/}
        const farms = [];
        var table = '';

        for (let i = 1; i <6 ; i++) {
          farms.push({
            owner: "Owner "+i,
            name: "Farm "+i
          });
        }

        this.state = { farms };
    }

    render() {
        return (
          <div className="page-header" class="text-center">
              <PageHeader class="text-center">Register Device</PageHeader>

              <Panel>

                <FormGroup controlId="formControlsText">
                    <ControlLabel>Name of the Device: </ControlLabel>
                    <FormControl placeholder="Enter the Name of the Device" type="text" />
                </FormGroup>

                <well>
                  <strong>NOTE:</strong> The name of the device must match the
                  thing name in <strong>IOT AWS</strong> dashboard
                </well>


                <br />
                <br />
                <br />
                {/* This is the section for the Panels of choices*/}
                  <Panel>
                    <Panel.Title>Select which Farm to which the device will register</Panel.Title>
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

                  <br />
                  <br />
                  <br />

                <FormGroup controlId="formControlsText">
                    <ControlLabel>Shadows HTTP Link: </ControlLabel>
                    <FormControl placeholder="ShadowsLink" type="text" />
                </FormGroup>

                <br />
                <input type="button" name="Cancel" value="Cancel" onClick={cancel} />
                <input type="button" name="Register" value="Register" onClick={register} />

              </Panel>
            </div>
        );
    }
}

function cancel() {
    ReactDOM.render(<div><ANavbar /> <Dashboard /></div>, document.getElementById("root"));
}

function register(){
    ReactDOM.render(<div><ANavbar /> <Dashboard /></div>, document.getElementById("root"));
}

export default RegisterDevice;
