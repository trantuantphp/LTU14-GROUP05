import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomeScreen from 'screens/Home/HomeScreen';
import AddUser from 'screens/User/AddUser';

class AppRouter extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={HomeScreen} />
                <Route exact path='/user' component={AddUser} />
            </Switch>
        );
    }
}

export default AppRouter;
