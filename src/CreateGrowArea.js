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

    const farmChoices = [{ fvalue: 1, label: "Farm 1" }, { fvalue: 2, label: "Farm 2" }, { fvalue: 3, label: "Farm 3" }];
    const growAreaChoices = [{ gvalue: 1, label: "Grow Area 1" }, { gvalue: 2, label: "Grow Area 2" }, { gvalue: 3, label: "Grow Area 3" }];

    this.toggle = this.toggle.bind(this);
    this.state = {
      farms,
      showModal: false,
      selectedFarmOption: null,
      selectedGrowAreaOption: null,
      farmChoices,
      growAreaChoices
    };
  }

  toggle() {
    this.setState({ showModal: !this.state.showModal });
  }

  handleFarmChange = (selectedFarmOption) => {
    this.setState({ selectedFarmOption });
  }

  handleGrowAreaChange = (selectedGrowAreaOption) => {
    this.setState({ selectedGrowAreaOption });
  }

  render() {
    return (
      <div class="text-center">
        {/*header*/}
        <div className="text-center">
          <PageHeader className="h1"> Create a Grow Area </PageHeader>
          <Button onClick={this.toggle}>Report Yield</Button>
          <div>
            <Modal show={this.state.showModal}>
              <Modal.Header>
                <Modal.Title>Report Yield for Grow Area</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h4>Select Farm</h4>
                <Select
                  value={this.state.selectedFarmOption}
                  onChange={this.handleFarmChange}
                  options={this.state.farmChoices}
                  defaulValue='--Select--'
                />
                <br />
                <h4>Select Grow Area</h4>
                <Select
                  value={this.state.selectedGrowAreaOption}
                  onChange={this.handleGrowAreaChange}
                  options={this.state.growAreaChoices}
                  defaulValue='--Select--'
                />
                <br />
                <h4>Yield:</h4><input type="text" name="yield" /><br />
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.toggle}>Close</Button>
              </Modal.Footer>
            </Modal>
          </div>
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
