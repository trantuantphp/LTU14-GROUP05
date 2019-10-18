import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../screens/Home';
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
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={Login}/>
            </Switch>
        );
    }
}

export default AppRouter;
