import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute ';
import HomeScreen from '../screens/dashboard';
import Login from '../screens/Login/Login';
import user from '../screens/user';

class AppRouter extends Component {
    state = {
        redirect: false,
        dataAuth: ''
    };
    
    async componentWillMount() {
        await this.setState({
            dataAuth: localStorage.getItem('auth')
        });
    }
    render() {
        return (
            <Switch>
                {/* <Route path='/home' component={HomeScreen} /> */}
                <Route path='/login' component={Login} />
                <PrivateRoute path='/home' component={HomeScreen} />
                <Route path='/user' component={user} />
            </Switch>
        );
    }
}

export default AppRouter;
