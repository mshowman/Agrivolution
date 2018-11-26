import React from 'react';
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';

class DeviceConfiguration extends React.Component {

    toggleClick(clicked) {
        return !clicked;
    }

    render() {
        return (
            <div>
                <span class="column">
                    <ListGroup>
                        <ListGroupItem>Device #1</ListGroupItem>
                        <ListGroupItem>Device #2</ListGroupItem>
                        <ListGroupItem>Device #3</ListGroupItem>
                        <ListGroupItem>Device #4</ListGroupItem>
                        <ListGroupItem>Device #5</ListGroupItem>
                        <ListGroupItem>Device #6</ListGroupItem>
                        <ListGroupItem>Device #7</ListGroupItem>
                        <ListGroupItem>Device #8</ListGroupItem>
                        <ListGroupItem>Device #9</ListGroupItem>
                        <ListGroupItem>Device #10</ListGroupItem>
                        <ListGroupItem>Device #11</ListGroupItem>
                        <ListGroupItem>Device #12</ListGroupItem>
                    </ListGroup>
                </span>
                
                <span class="column">
                    <ListGroup>
                        <ListGroupItem>Device #14</ListGroupItem>
                    </ListGroup>
                </span>
            </div>
        );
    }

}

export default DeviceConfiguration;