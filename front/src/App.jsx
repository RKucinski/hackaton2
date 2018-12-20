import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Accroche from './components/Accroche';
// import Stats from './components/Stats';
// import Equipements from './components/Equipements';
// import Auth from './components/Auth';
// import Signup from './components/SignUp';
// import DetailEquipement from './components/DetailEquipement';
// import UserProfile from './components/UserProfile';
// import UserParameter from './components/UserParameter';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Accroche} />
                    {/* <Route exact path="/auth" component={Auth} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/stats" component={Stats} />
                    <Route exact path="/equipements" component={Equipements} />
                    <Route exact path="/equipements/detail" component={DetailEquipement} />
                    <Route exact path="/userprofile" component={UserProfile} />
                    <Route exact path="/userparameter" component={UserParameter} /> */}

                </Switch>
            </div>
        );
    }
}

export default App;