//BusinessRules.js

import React, { Component } from 'react';
import { PageHeader, Panel, Col, Row, Grid, FormGroup, ControlLabel, FormControl, Button, Well, } from 'react-bootstrap';
import Select from 'react-select';
import { Form, Text } from 'informed';


/*later use this section for the API call to populate the arrays*/
const farms = [
    { owner: "Ann ", value: "Farm 1", label: "Farm 1" },
    { owner: "Bob ", value: "Farm 2", label: "Farm 2" },
    { owner: "Cat ", value: "Farm 3", label: "Farm 3" },
    { owner: "Dan ", value: "Farm 4", label: "Farm 4" },
    { owner: "Eve ", value: "Farm 5", label: "Farm 5" }
];

const growAreas = [
    { value: "Area 1", label: "Area 1" },
    { value: "Area 2", label: "Area 2" },
    { value: "Area 3", label: "Area 3" },
    { value: "Area 4", label: "Area 4" },
    { value: "Area 5", label: "Area 5" },
    { value: "Area 6", label: "Area 6" },
    { value: "Area 7", label: "Area 7" }
];

const alertOptions = [
    {value: "Email" , label: "Email"},
    {value: "Text Message", label: "Text Message" }
];

var times = [];


class BusinessRules extends Component {

constructor(){
    super();

    var quarterHours = ["00", "15", "30", "45"];
    for(var i = 0; i < 24; i++) {
        for (var j = 0; j < 4; j++) {
            var time = i + ":" + quarterHours[j];
            if (i < 10) {
                time = "0" + time;
            }
            times.push({value: time, label: time,});
        }
    }
}
    render() {
        return (
            <div class="text-center">
                {/*header*/}
                <div className="text-center">
                    <PageHeader className="h1"> Business Rules </PageHeader>
                </div>

                <Grid>
                    <Col sm={6} md={4}></Col>
                    <Col sm={6} md={4}>
                        <Panel>
                            <Panel.Title>List of Farms</Panel.Title>
                            <Panel.Body>
                                <Select
                                    options={farms}
                                    onChange={this.handleChange}
                                />
                            </Panel.Body>
                        </Panel>

                        <Panel>
                            <Panel.Title>List of Grow Areas</Panel.Title>
                            <Panel.Body>
                                <Select
                                    options={growAreas}
                                    onChange={this.handleChange}
                                />
                            </Panel.Body>
                        </Panel>

                    </Col>
                    <Col sm={6} md={4}></Col>
                </Grid>

                <br />
                <h />

                <Grid>
                    <Row>
                        <Col sm={6} md={4}>
                            <Form inline>
                                <FormGroup controlId="bRuleform">
                                    <ControlLabel>Business Rule ID:</ControlLabel>
                                    <div>
                                        <Well>
                                            <FormControl.Static>#####</FormControl.Static>
                                        </Well>
                                    </div>
                                </FormGroup>
                            </Form>
                        </Col>
                        <Col sm={6} md={4}></Col>
                        <Col sm={6} md={4}>
                            <Form>
                                <FormGroup controlId="status">
                                    <ControlLabel>Status:</ControlLabel>
                                    <div>
                                        <Well>
                                            <FormControl.Static>This is the Status</FormControl.Static>
                                        </Well>
                                    </div>
                                </FormGroup>
                            </Form>
                        </Col>
                    </Row>


                    <Row>
                        <Col sm={6} md={4}>
                            <Form inline>
                                <FormGroup controlId="growareaid">
                                    <ControlLabel>Grow Area ID:</ControlLabel>{' '}
                                    <FormControl type="text" placeholder="Grow Area #" />
                                </FormGroup>{' '}
                            </Form>
                        </Col>
                        <Col sm={6} md={4}>
                            <Form>
                                <FormGroup controlId="deviceid">
                                    <ControlLabel>Device ID:</ControlLabel>{' '}
                                    <FormControl type="text" placeholder="Device #" />
                                </FormGroup>{' '}
                            </Form>
                        </Col>
                        <Col sm={6} md={4}>
                            <Form>
                                <FormGroup controlId="devicetype">
                                    <ControlLabel>Device Type:</ControlLabel>{' '}
                                    <FormControl type="text" placeholder="Type" />
                                </FormGroup>{' '}
                            </Form>
                        </Col>

                    </Row>


                    <br />
                    <br />

                    <Row>
                        <Col sm={6} md={4}>
                            <Form inline>
                                <FormGroup controlId="alertvalue">
                                    <ControlLabel>Alert Value:</ControlLabel>{' '}
                                    <FormControl type="text" placeholder="###" />
                                </FormGroup>{' '}
                            </Form>
                        </Col>
                        <Col sm={6} md={4}>
                            <ControlLabel> Alert Options:</ControlLabel>
                            <Select
                                options={alertOptions}
                                onChange={this.handleChange}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={8} md={6}>
                            <ControlLabel> Start Time:</ControlLabel>
                            <Select
                                options={times}
                                onChange={this.handleChange}
                            />
                        </Col>
                        <Col sm={8} md={6}>
                            <ControlLabel> End Time:</ControlLabel>
                            <Select
                                options={times}
                                onChange={this.handleChange}
                            />
                        </Col>
                    </Row>
                </Grid>

                <br />
                <br />
                <Col sm={6} md={4}></Col>
                <Col sm={6} md={4}><Button type="submit" bsSize="large">Submit Rule Definition</Button></Col>
                <Col sm={6} md={4}></Col>

            </div>
        )
    }


}

export default BusinessRules;
