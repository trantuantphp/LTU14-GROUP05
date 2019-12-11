/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Input, Col, Icon, Button, Modal } from 'antd';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

import './Login.css';
import Register from '../Register';
import { AuthenService } from '../../Services/AuthenService';
// import Router from './layouts/Router/Router';

var socket = require('socket.io-client')('http://api-dds.tuan-ltu.com');

@inject('AuthStore')
@observer
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    componentDidMount() {
        const { AuthStore, history } = this.props;
    }

    handleChangeUsername = event => {
        this.setState({
            username: event.target.value
        });
    };

    handleChangePass = event => {
        this.setState({
            password: event.target.value
        });
    };

    onClickLogin = async () => {
        const { AuthStore, history } = this.props;
        if (this.state.username !== '' && this.state.password !== '') {
            const res = await AuthenService.login(this.state.username, this.state.password);
            // console.log('RES', JSON.stringify(res));
            if (res && res.errorCode === 0) {
                if (res.data) {
                    AuthStore.isLogin = true;
                    AuthStore.setUserInfor(res.data);
                    history.push('/');
                } else {
                    alert(res.msg);
                }
            } else {
                console.log('ERROR');
            }
        } else {
            alert('Vui lòng nhập đầy đủ thông tin');
        }
        // await AuthenService.login('trantuan001', '123456');
    };

    onClickRegister = () => {
        const { AuthStore } = this.props;
        AuthStore.isShowModalRegister = true;
    };

    handleDissmissModal = () => {
        const { AuthStore } = this.props;
        AuthStore.isShowModalRegister = false;
    };

    render() {
        const { AuthStore } = this.props;
        const { username, password } = this.state;
        return (
            <div className='Login'>
                <Col span={6}>
                    <div
                        style={{
                            backgroundColor: '#fff',
                            padding: 15,
                            borderRadius: 6
                        }}
                    >
                        <div
                            style={{
                                color: '#000000',
                                fontSize: 24,
                                textAlign: 'center'
                            }}
                        >
                            LIVE CHAT
                        </div>
                        <div style={{ paddingTop: 15 }}>
                            <Input
                                placeholder='Username'
                                prefix={(
                                    <div>
                                        <Icon
                                            type='user'
                                            style={{ color: 'rgba(0,0,0,.25)' }}
                                        />
                                    </div>
                                )}
                                value={username}
                                onChange={this.handleChangeUsername}
                            />
                        </div>
                        <div style={{ paddingTop: 8 }}>
                            <Input
                                placeholder='Password'
                                prefix={(
                                    <div>
                                        <Icon
                                            type='user'
                                            style={{ color: 'rgba(0,0,0,.25)' }}
                                        />
                                    </div>
                                )}
                                type='password'
                                value={password}
                                onChange={this.handleChangePass}
                            />
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                width: '100%',
                                justifyContent: 'flex-end',
                                paddingTop: 25,
                                paddingBottom: 20
                            }}
                        >
                            <Button
                                style={{ backgroundColor: '#39d431' }}
                                onClick={this.onClickLogin}
                            >
                                Đăng nhập
                            </Button>
                        </div>
                        <div
                            style={{
                                width: '100%',
                                height: 1,
                                backgroundColor: '#00000050'
                            }}
                        />
                        <div style={{ paddingTop: 10, textAlign: 'center' }}>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center'
                                }}
                            >
                                <div style={{ marginRight: 5 }}>
                                    Chưa có tài khoản?
                                </div>
                                <Link onClick={this.onClickRegister}>
                                    Đăng ký
                                </Link>
                            </div>
                            <div style={{ paddingTop: 8 }}>
                                <Link>Quên mật khẩu</Link>
                            </div>
                        </div>
                    </div>
                </Col>
                <Modal
                    visible={AuthStore.isShowModalRegister}
                    footer={null}
                    centered
                    onCancel={this.handleDissmissModal}
                >
                    <Register />
                </Modal>
            </div>
        );
    }
}

export default Login;
