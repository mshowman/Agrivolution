import React from 'react';
import Select from 'react-select';
import { Button } from 'react-bootstrap';

const users = [
    { value: "Fei", label: "Fei" },
    { value: "Matt", label: "Matt" },
    { value: "Raj", label: "Raj" },
    { value: "Nate", label: "Nate" },
    { value: "Ramon", label: "Ramon" },
];

const farms = [
    { value: 1, label: "Farm 1" },
    { value: 2, label: "Farm 2" },
    { value: 3, label: "Farm 3" }
];

const growAreas = [
    { value: 1, label: "Grow Area 1" },
    { value: 2, label: "Grow Area 2" },
    { value: 3, label: "Grow Area 3" }
];

const styles = {
    padding: "50px",
    width: "50%",
}

class AssignUser extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedUser: "",
        }
    }

    handleUser = (selectedUser) => {
        this.setState({ selectedUser });
    }

    handleFarm = (selectedFarm) => {
        this.setState({ selectedFarm });
    }

    handleGrowArea = (selectedGrowArea) => {
        this.setState({ selectedGrowArea });
    }

    render() {
        return (
            <div>
                <table width="80%" align="center">
                    <tbody>
                        <tr>
                            <td style={styles}>Select a user:</td>
                            <td>
                                <Select
                                    onChange={this.handleUser}
                                    options={users}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td style={styles}>Select a farm:</td>
                            <td>

                                <Select
                                    onChange={this.handleFarm}
                                    options={farms}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td style={styles}>Select a grow area:</td>
                            <td>

                                <Select
                                    onChange={this.handleGrowArea}
                                    options={growAreas}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td style={styles} align="right"><Button>Submit</Button></td>
                            <td><Button>Cancel</Button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default AssignUser;