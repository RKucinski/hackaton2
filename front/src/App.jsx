import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
/*eslint-disable*/

// import Accroche from './components/Accroche';
// import Stats from './components/Stats';
import Equipments from './components/Equipments';
import Auth from './components/Auth';
import SignUp from './components/SignUp';
import DetailEquipment from './components/DetailEquipment';
// import UserProfile from './components/UserProfile';
// import UserParameter from './components/UserParameter';

class App extends Component{
  render() {
    return(
  <div className="App">
    <Switch>
      {/* <Route exact path="/" component={Accroche} /> */}
      <Route exact path="/auth" component={Auth} />
      <Route exact path="/signUp" component={SignUp} />
      {/* <Route exact path="/stats" component={Stats} /> */}
      <Route exact path="/equipments" component={Equipments} />
      <Route exact path="/equipments/detail" component={DetailEquipment} />
      {/* <Route exact path="/userprofile" component={UserProfile} /> */}
      {/* <Route exact path="/userparameter" component={UserParameter} /> */}
    </Switch>
  </div>
    )}
}

export default App;
