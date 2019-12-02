import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

// @inject('AuthStore')
// @observer

class AuthRoute extends Component {
    constructor(props) {
        super(props);
        this.state={
            login:true
        }
    }
    
    render() {
        const { AuthStore, ...restProps } = this.props;
        if (this.state.login) return <Route {...restProps} />;
        return <Redirect to='/login' />;
    }
}

export default AuthRoute;
