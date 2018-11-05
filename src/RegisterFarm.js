import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FormControl, FormGroup, ControlLabel, Form, PageHeader } from 'react-bootstrap';
import ANavbar from './ANavbar';
import Dashboard from './Dashboard';

class RegisterFarm extends Component {

    render() {
        return (
          <div className="page-header" class="text-center">
                <form>
                    <PageHeader class="text-center">Register a New Farm</PageHeader>
                    <Form inline>
                        <div class="text-center">
                            <FormGroup controlId="formControlsText">
                                <ControlLabel>Name of Location: </ControlLabel>
                                <FormControl placeholder="Location" type="text" />
                            </FormGroup>
                            <br />
                            <FormGroup controlId="formControlsText">
                                <ControlLabel>Latitude: </ControlLabel>
                                <FormControl placeholder="Latitude" type="text" />
                            </FormGroup>
                            <br />
                            <FormGroup controlId="formControlsText">
                                <ControlLabel>Longitude: </ControlLabel>
                                <FormControl placeholder="Logitude" type="text" />
                            </FormGroup>
                            <br />
                            <FormGroup controlId="formControlsText">
                                <ControlLabel>Elevation: </ControlLabel>
                                <FormControl placeholder="Elevation" type="text" />
                            </FormGroup>
                            <br />
                            <input type="button" name="Cancel" value="Cancel" onClick={cancel} />
                            <input type="button" name="Register" value="Register" onClick={register} />
                        </div>
                    </Form>
                </form>
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

export default RegisterFarm;
