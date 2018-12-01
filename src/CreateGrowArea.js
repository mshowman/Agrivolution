//growarea.js

import React, { Component } from 'react';
import { PageHeader, Panel, Modal, Well, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import Select from 'react-select';

class CreateGrowArea extends Component {
  constructor(props) {
    super(props);

    {/*later use this section for the API call to populate the array*/ }
    const farms = [];
    for (let i = 1; i < 6; i++) {
      farms.push({
        owner: "Owner " + i,
        name: "Farm " + i
      });
    }

    this.toggle = this.toggle.bind(this);
    this.state = {
      farms,
    };
  }

  render() {
    return (
      <div class="text-center">
        {/*header*/}
        <div className="text-center">
          <PageHeader className="h1"> Create a Grow Area </PageHeader>
        </div>

        <div>
          <Well bsSize="large">
            <form>
              <FormGroup controlId="formControlsText">
                <ControlLabel>Name of the Grow Area</ControlLabel>
                <FormControl type="text" />
              </FormGroup>
            </form>
          </Well>

          <br />

          {/* This is the section for the Panels of choices*/}
          <Panel>
            <Panel.Title>Choose a Farm</Panel.Title>
            <Panel.Body>
              <select className="form-control">
                <option>---select---</option>
                {
                  this.state.farms.map((farmNames, i) =>
                    (<option key={i} value={farmNames}>{farmNames.name + " " + farmNames.owner}</option>))
                }
              </select>
            </Panel.Body>
          </Panel>

          <br />

          {/*Cancel and Submit buttons*/}
          <div className="row">
            <div className="col-sm-3">
              <input type="button" name="Cancel" value="Cancel" />
            </div>
            <div className="col-sm-3"></div>
            <div className="col-sm-3"></div>
            <div className="col-sm-3">
              <input type="button" name="Submit" value="Submit" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CreateGrowArea;
