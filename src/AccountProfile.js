import React, { Component } from 'react';
import { FormControl, FormGroup, ControlLabel, Form, PageHeader } from 'react-bootstrap';

class AccountProfile extends Component {

    render() {
        return (
            <div>
                <PageHeader>Account Profile</PageHeader>
                <Form inline>
                    <div class="text-center">
                        <FormGroup controlId="formControlsText">
                            <ControlLabel>Name:</ControlLabel>
                            <FormControl placeholder="Full Name" type="label" />
                        </FormGroup>
                    </div>
                    <br />
                    <div class="text-center">
                        <FormGroup controlId="formControlsText">
                            <ControlLabel>Email:</ControlLabel>
                            <FormControl placeholder="Email" type="email" />
                        </FormGroup>
                    </div>
                    <br />
                    <div class="text-center">
                        <FormGroup controlId="formControlsText">
                            <ControlLabel>Phone:</ControlLabel>
                            <FormControl placeholder="Phone" type="text" />
                        </FormGroup>
                    </div>
                    <hr />
                    <div class="text-center">
                        <FormGroup controlId="formControlsText">
                            <ControlLabel>Current Password:</ControlLabel>
                            <FormControl placeholder="***" type="password" />
                        </FormGroup>
                    </div>
                    <br />
                    <div class="text-center">
                        <FormGroup controlId="formControlsText">
                            <ControlLabel>New Password:</ControlLabel>
                            <FormControl placeholder="***" type="password" />
                        </FormGroup>
                    </div>
                    <br />
                    <div class="text-center">
                        <FormGroup controlId="formControlsText">
                            <ControlLabel>Confirm New Password:</ControlLabel>
                            <FormControl placeholder="***" type="password" />
                        </FormGroup>
                    </div>
                    <hr />
                    <div class="text-center">
                        <FormGroup controlId="formControlsText">
                            <ControlLabel>Subscription Status:</ControlLabel>
                            <FormControl placeholder="Active" type="label" />
                        </FormGroup>
                    </div>
                </Form>
                <br />
                <a href="#">Renew Subscription</a>
                <br />
                <a href="#">Upgrade Account</a>
                <hr />
                <a href="#">Delete Account</a>
                
            </div>
        );
    }


}

export default AccountProfile;