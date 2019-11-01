import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AuthRoute from  './AuthRoute';
import MainApp from '../MainApp';
import LoginScreen from 'screens/Login/LoginScreen';

class PreRouter extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/login' component={LoginScreen} />
                <AuthRoute path='/' component={MainApp} />
            </Switch>
        );
    }
}

export default PreRouter;
