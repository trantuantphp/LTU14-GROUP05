import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import AuthRoute from './AuthRoute';
import User from 'screens/User';

class MainRouter extends Component {
    render() {
        return (
            <Switch>
                <AuthRoute exact path='/' component={User.List} />
            </Switch>
        );
    }
}

export default MainRouter;
