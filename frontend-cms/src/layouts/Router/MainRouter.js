import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import AuthRoute from './AuthRoute';
import HomeScreen from 'screens/Home/HomeScreen';
import AddUser from 'screens/User/AddUser';
import UserProfile from 'screens/User/UserProfile';

class MainRouter extends Component {
    render() {
        return (
            <Switch>
                <AuthRoute exact path='/' component={HomeScreen} />
                <AuthRoute exact path='/user' component={AddUser} />
                <AuthRoute exact path='/profile' component={UserProfile} />
            </Switch>
        );
    }
}

export default MainRouter;
