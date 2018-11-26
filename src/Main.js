import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard';
import RegisterFarm from './RegisterFarm';
import GrowArea from './GrowArea';
import CropCycle from './CropCycle';
import RegisterUser from './RegisterUser';
import RealTime from './RealTime';
import SummaryDashboard from './SummaryDashboard';
import AccountProfile from './AccountProfile';
import RegisterDevice from './RegisterDevice';

const notMade = () => (
    <div>
      <h3>Page not made yet.</h3>
    </div>
);

const Main = () => (
    <main>
      <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/register-farm' component={RegisterFarm}/>
        <Route path='/create-grow-area' component={GrowArea}/>
        <Route path='/create-crop-cycle' component={CropCycle}/>
        <Route path='/create-business-rule' component={notMade}/>
        <Route path='/register-user' component={RegisterUser}/>
        <Route path='/register-device' component={RegisterDevice}/>
        <Route path='/configure-device' component={notMade}/>
        <Route path='/control-device' component={notMade}/>
        <Route path='/calibrate-device' component={notMade}/>
        <Route path='/real-time' component={RealTime}/>
        <Route path='/summary' component={SummaryDashboard}/>
        <Route path='/profile' component={AccountProfile}/>
        <Route path='/subscription' component={notMade}/>
      </Switch>
    </main>
  );

  export default Main;
