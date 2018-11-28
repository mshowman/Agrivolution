import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import GrowAreaView from './GrowAreaView';

const styles = {
  resize: {
    width: "50%",
    margin: "auto"
  }
};

class Dashboard extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: true
    };
  }

  render() {
    return (
      <div style={styles.resize}>
        <Panel>
          <Panel.Heading>
            <Panel.Title toggle className="text-center">
              CT - NE 4
            </Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
              <GrowAreaView name="Grow Area #1" />
              <GrowAreaView name="Grow Area #2" />
              <GrowAreaView name="Grow Area #3" />
              <GrowAreaView name="Grow Area #4" />
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
        <Panel>
          <Panel.Heading>
            <Panel.Title toggle className="text-center">
              CT - NE 7
            </Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
              <GrowAreaView name="Grow Area #1" />
              <GrowAreaView name="Grow Area #2" />
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
        <Panel>
          <Panel.Heading>
            <Panel.Title toggle className="text-center">
              CT - NW 2
            </Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
              <GrowAreaView name="Grow Area #1" />
              <GrowAreaView name="Grow Area #2" />
              <GrowAreaView name="Grow Area #3" />
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
        <Panel>
          <Panel.Heading>
            <Panel.Title toggle className="text-center">
              NY - SW 5
            </Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
              <GrowAreaView name="Grow Area #1" />
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
      </div>
    );
  }
}

export default Dashboard;
