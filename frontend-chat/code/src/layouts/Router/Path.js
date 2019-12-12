import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Redirect, Route } from 'react-router-dom';

@inject('AuthStore')
@observer
class Path extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { AuthStore, ...restProps } = this.props;
        // const socketInfor = localStorage.getItem('socketInfor');
        // if (socketInfor) {
        // return (<Route {...restProps} />);
        // } else {
        if (AuthStore.isLogin) return (<Route {...restProps} />);
        else return (<Redirect to='/login' />);
        // }

    }
}

export default Path;
