import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute ';
import Login from '../../screens/Login/Login';
import HomeScreen from 'screens/Home/HomeScreen';
import AddUser from 'screens/User/AddUser';
import AuthRoute from './AuthRoute';

class AppRouter extends Component {
    state = {
        redirect: false,
        dataAuth: ''
    };
    
    render() {
        return (
            <Switch>
                <Route path='/login' component={Login} />
                <AuthRoute path='/' component={HomeScreen} />
                <AuthRoute exact path='/user' component={AddUser} />
            </Switch>
        );
    }
}

export default AppRouter;
