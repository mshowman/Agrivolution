import React, { Component } from 'react';
import Farm from './Farm';
import { Panel } from 'react-bootstrap';


class Dashboard extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: true
    };
  }

  render() {
    return (
      <div>
      <Panel defaultExpanded>
          <Panel.Heading>
            <Panel.Title toggle>
              CT - NE 4
            </Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
              Grow Area #1
              Grow Area #2
              Grow Area #3
              Grow Area #4
            </Panel.Body>
          </Panel.Collapse>
      </Panel>
      <div><Farm name="1-NE" /></div>
      <div><Farm name="1-NW" /></div>
      <div><Farm name="2-NW" /></div>
      <div><Farm name="1-SE" /></div>
    </div>
    );
  }
}

export default Dashboard;
