//growarea.js

import React, { Component } from 'react';
import { PageHeader,Panel,Well} from 'react-bootstrap';


function bRule(value){
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

    switch (value) {
      case value === "Tomato":
          this.setState({
            sentence: dummySentences[0]
          });
        break;

        case value === "Lettuce":
            this.setState({
              sentence: dummySentences[1]
            });
          break;
      default:

      }
      return;
    }



class CropCycle extends Component{
  constructor(props) {
      super(props);

      {/*using constants for now but this section will be popluated with actual data later*/}
      const farmName = "Farm #_____";
      const bRules = ["Tomato", "Lettuce","Cucumber","Carrot"];


      {/*later use this section for the API call to populate the array*/}
      const growAreas = [];
      for(let j = 1; j < 11; j++){
         growAreas.push({
           area: "Area "+j
         });
      }
        this.state = {growAreas,farmName,bRules};
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


              <Panel>
                <Panel.Title>Default Business Rules:</Panel.Title>
                  <Panel.Body>
                      <select className="form-control" onChange={bRule()}>
                                <option>---select---</option>
                                  {
                                  this.state.bRules.map((br, i) =>
                                  (<option key={i} value={br}>{br}</option>))
                                  }
                      </select>
                    </Panel.Body>
                </Panel>


              <br />

              <Panel bsSize="large">
                <Well>
                  {this.state.sentence}
                </Well>
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

export default CropCycle;
