import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../../screens/Login/Login';
import HomeScreen from 'screens/Home/HomeScreen';
import AuthRoute from './AuthRoute';
import MainApp from '../MainApp';

class AppRouter extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/login' component={Login} />
                <AuthRoute path='/' component={MainApp} />
            </Switch>
        );
    }
}

export default AppRouter;
