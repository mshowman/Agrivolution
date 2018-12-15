import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard';
import RegisterFarm from './RegisterFarm';
import CreateGrowArea from './CreateGrowArea';
import CropCycle from './CropCycle';
import RegisterUser from './RegisterUser';
import AssignUser from './AssignUser';
import RealTime from './RealTime';
import SummaryDashboard from './SummaryDashboard';
import AccountProfile from './AccountProfile';
import RegisterDevice from './RegisterDevice';
import DeviceCalibrate from './DeviceCalibrate';
import Control from './Control';
import BusinessRules from './BusinessRules';


const notMade = () => (
  <div>
    <h3>Page not made yet.</h3>
  </div>
);

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Dashboard} />
      <Route path='/register-farm' component={RegisterFarm} />
      <Route path='/create-grow-area' component={CreateGrowArea} />
      <Route path='/create-crop-cycle' component={CropCycle} />
      <Route path='/create-business-rule' component={BusinessRules} />
      <Route path='/register-user' component={RegisterUser} />
      <Route path='/assign-user' component={AssignUser} />
      <Route path='/register-device' component={RegisterDevice} />
      <Route path='/configure-device' component={notMade} />
      <Route path='/control-device' component={Control} />
      <Route path='/calibrate-device' component={DeviceCalibrate} />
      <Route path='/real-time' component={RealTime} />
      <Route path='/summary' component={SummaryDashboard} />
      <Route path='/profile' component={AccountProfile} />
      <Route path='/subscription' component={notMade} />
      <Route component={notMade} />
    </Switch>
  </main>
);

export default Main;
