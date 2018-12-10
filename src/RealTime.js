import React, { Component } from 'react';
import { VictoryChart, VictoryLine } from 'victory';
import { DropdownButton,PageHeader, ButtonToolbar,MenuItem} from 'react-bootstrap';

class RealTime extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hover: false
        }
    }

    render() {
        return (
          <div className="page-header" class="text-center">
                    <PageHeader class="text-center">Real-Time Reporting</PageHeader>

                <span class="column">
                    <h3><u>Device Status:</u></h3>
                    <h4>Temperature</h4>
                    <ul>
                        <li>Device #1: 70F</li>
                        <li>Device #2: 63F</li>
                    </ul>
                    <h4>Humidity</h4>
                    <ul>
                        <li>Device #1: 80%</li>
                        <li>Device #2: 33%</li>
                    </ul>
                    <h4>Water Level</h4>
                    <ul>
                        <li>Device #1: 3 mL / m</li>
                        <li>Device #2: 7 mL / m</li>
                    </ul>
                </span>

                <span class="column">
                    <div>
                        <p>Farm:
                        <ButtonToolbar>
                        <DropdownButton
                                bsSize="medium"
                                title="[Select Farm]"
                                id="farmDropdown"
                            >
                                <MenuItem eventKey="1">Farm 1</MenuItem>
                                <MenuItem eventKey="2">Farm 2</MenuItem>
                                <MenuItem eventKey="3">Farm 3</MenuItem>
                                <MenuItem eventKey="4">Farm 4</MenuItem>
                                <MenuItem eventKey="5">Farm 5</MenuItem>
                            </DropdownButton>
                            </ButtonToolbar>

                        </p>
                        <p>Grow Area:
                        <ButtonToolbar>
                        <DropdownButton
                                bsSize="medium"
                                title="[Select Grow Area]"
                                id="growAreaDropdown"
                            >
                                <MenuItem eventKey="1">Grow Area 1</MenuItem>
                                <MenuItem eventKey="2">Grow Area 2</MenuItem>
                                <MenuItem eventKey="3">Grow Area 3</MenuItem>
                                <MenuItem eventKey="4">Grow Area 4</MenuItem>
                                <MenuItem eventKey="5">Grow Area 5</MenuItem>
                            </DropdownButton>
                            </ButtonToolbar>
                            </p>
                    </div>

                    <div>
                        <h3><u>Grow Area Status:</u></h3>
                        <VictoryChart animate={{ duration: 2000 }}>
                            <VictoryLine
                                data={[
                                    { x: 0, y: 68 },
                                    { x: 1, y: 69 },
                                    { x: 2, y: 67 },
                                    { x: 3, y: 68 },
                                    { x: 4, y: 69 },
                                    { x: 5, y: 68 },
                                    { x: 6, y: 69 },
                                    { x: 7, y: 70 },
                                    { x: 8, y: 71 },
                                    { x: 9, y: 66 },
                                    { x: 10, y: 67 },
                                    { x: 11, y: 68 },
                                    { x: 12, y: 69 },
                                    { x: 13, y: 67 },
                                    { x: 14, y: 68 }
                                ]} />
                        </VictoryChart>
                    </div>
                </span>
            </div>
        );
    }

}

export default RealTime;
