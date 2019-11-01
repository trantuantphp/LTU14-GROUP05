import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import AuthRoute from './AuthRoute';
import HomeScreen from 'screens/Home/HomeScreen';

class MainRouter extends Component {
    render() {
        return (
            <Switch>
                <AuthRoute exact path='/' component={HomeScreen} />
            </Switch>
        );
    }
}

export default MainRouter;
