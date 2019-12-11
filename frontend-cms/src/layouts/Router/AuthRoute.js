import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

class AuthRoute extends Component {
    render() {
        const { AuthStore, ...restProps } = this.props;
        if (AuthStore.login) return <Route {...restProps} />;
        return <Redirect to='/login' />;
    }
}
export default inject('AuthStore')(observer(AuthRoute));
