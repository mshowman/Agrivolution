import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
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
                            <button><Link to='/'>Cancel</Link></button>
                            <button><Link to='/'>Register</Link></button>
                        </div>
                    </Form>
                </form>
            </div>
        );
    }
}

export default RegisterFarm;
