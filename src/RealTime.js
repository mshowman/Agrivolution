import React, { Component }from 'react';

class RealTime extends Component{

    render(){
        return(
            <div>
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
                        <p>Farm: [dropdown]</p>
                        <p>Grow Area:[dropdown]</p>
                    </div>

                    <div>
                        <h3><u>Grow Area Status:</u></h3>
                    </div>
                </span>
            </div>
        );
    }

}

export default RealTime;