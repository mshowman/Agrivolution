//growarea.js

import React, { Component } from 'react';
import { PageHeader,Panel,Table,Well,Label,FormGroup,FormControl,ControlLabel} from 'react-bootstrap';


class GrowArea extends Component{
  constructor(props) {
      super(props);

      const growAreaName = "Grow Area 1";
      {/*later use this section for the API call to populate the array*/}
      const farms = [];
      for (let i = 1; i <6 ; i++) {
        farms.push({
          owner: "Owner "+i,
          name: "Farm "+i
        });
      }
        this.state = {farms};
  }

      render(){
          return(

            <div class="text-center">
              {/*header*/}
              <div className="text-center">
              <PageHeader className="h1"> Grow Area </PageHeader>
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

export default GrowArea;
