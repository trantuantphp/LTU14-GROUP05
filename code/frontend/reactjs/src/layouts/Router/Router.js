import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomeScreen from 'screens/Home/HomeScreen';

class AppRouter extends Component {
    render() {
        return (
            <Switch>
                <Route path='/' component={HomeScreen} />
            </Switch>
        );
    }
}

export default AppRouter;
