import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeScreen from '../../screens/Home/HomeScreen';
import Login from '../../screens/Login';
import Path from './Path';

class AppRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Switch>
                <Route exact path='/login' component={Login} />
                <Path exact path='/' component={HomeScreen} />
            </Switch>
        );
    }
}

export default AppRouter;
