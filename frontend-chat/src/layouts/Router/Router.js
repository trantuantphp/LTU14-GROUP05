import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeScreen from '../../screens/Home/HomeScreen';
import Login from '../../screens/Login';

class AppRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Switch>
                <Route exact path='/' component={HomeScreen} />
            </Switch>
        );
    }
}

export default AppRouter;
