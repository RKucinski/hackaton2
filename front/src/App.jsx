import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
/*eslint-disable*/

import Accroche from './components/Accroche';
import Equipments from './components/Equipments';
import Auth from './components/Auth';
import SignUp from './components/SignUp';
import DetailEquipment from './components/DetailEquipment';
import Home from './components/Home';
// import UserProfile from './components/UserProfile';
// import UserParameter from './components/UserParameter';
import EquipmentInfo from './components/EquipmentInfo';
import QrCodeScan from './components/QrCodeScan';
import UserProvider from './context/UserContext';
import Questionnaire from './components/Questionnaire';

class App extends Component {
  render() {
    return(
  <div className="App">
    <Switch>
    <UserProvider>
      <Route exact path="/" component={Accroche} />
      <Route exact path="/auth" component={Auth} />
      <Route exact path="/signUp" component={SignUp} />
      <Route exact path="/equipments" component={Equipments} />
      <Route exact path="/equipments/detail" component={DetailEquipment} />
      <Route exact path="/home" component={Home}/>
      {/* <Route exact path="/userprofile" component={UserProfile} /> */}
      {/* <Route exact path="/userparameter" component={UserParameter} /> */}
      <Route exact path="/equipment/info" component={EquipmentInfo} />
      <Route exact path="/qrcode" component={QrCodeScan} />
      <Route exact path="/answer" component={Questionnaire} />
      </UserProvider>
    </Switch>
  </div>
    )}
}

export default App;
