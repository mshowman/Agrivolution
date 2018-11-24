//growarea.js

import React, { Component } from 'react';
import { PageHeader,Panel,Table,Well,Label,FormGroup,FormControl,ControlLabel} from 'react-bootstrap';


class CropCycle extends Component{
  constructor(props) {
      super(props);

      {/*using constants for now but this section will be popluated with actual data later*/}
      const farmName = "Farm #_____";
      const bRules = ["Tomato", "Lettuce","Cucumber","Carrot"];
      const dummySentences = [
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        'Donec hendrerit tempor tellus.',
        'Donec pretium posuere tellus.',
        'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.',
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        'Nulla posuere.',
        'Donec vitae dolor.',
        'Nullam tristique diam non turpis.',
        'Cras placerat accumsan nulla.',
        'Nullam rutrum.',
        'Nam vestibulum accumsan nisl.'
      ];

      {/*later use this section for the API call to populate the array*/}
      const growAreas = [];
      for(let j = 1; j < 11; j++){
         growAreas.push({
           area: "Area "+j
         });
      }
        this.state = {growAreas,farmName,bRules,dummySentences};
  }

      render(){
          return(

            <div class="text-center">
              {/*header*/}
              <div className="text-center">
              <PageHeader className="h1">
                {this.state.farmName}
                <br />
                Create a Crop Cycle
              </PageHeader>
            </div>

            <div>

              <br />

              {/* This is the section for the Panels of choices*/}
              <Panel>
                <Panel.Title>Choose a Grow Area</Panel.Title>
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

              <br />


                <form inline>
                  <FormGroup controlId="formControlsSelect">
                    <ControlLabel>Defaul Business Rules: </ControlLabel>
                    <FormControl componentClass="select" placeholder="select">
                      <select className="form-control">
                                <option>---select---</option>
                                  {
                                  this.state.bRules.map((br, i) =>
                                  (<option key={i} value={br}>{br}</option>))
                                  }
                      </select>
                    </FormControl>
                  </FormGroup>
                </form>

              <br />

              <Panel bsSize="large">

              </Panel>

            </div>
            </div>
          )
      }
}

export default CropCycle;
