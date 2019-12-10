import React, { Component } from 'react';
import { Input, Icon, Button } from 'antd';
import { inject, observer } from 'mobx-react';

import { AuthenService } from '../../Services/AuthenService';

@inject('AuthStore')
@observer
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: '',
      username: '',
      password: '',
      rePassword: '',
    };
  }

  onClickLogin = async () => {
    const { AuthStore } = this.props;
    const { fullname, username, password, rePassword } = this.state;
    if (fullname !== '' && username !== '' && password !== '') {
      if (password === rePassword) {
        const res = await AuthenService.register(username, password, fullname, null);
        if (res.errorCode === 0) {
          AuthStore.isShowModalRegister = false;
          alert('Đăng ký thành công');
        }
      } else {
        alert('Mật khẩu không trùng khớp');
      }
    } else {
      alert('Vui lòng điền đầy đủ thông tin');
    }
  }

  handleChangeName = event => {
    this.setState({
      fullname: event.target.value
    });
  }

  handleChangeUsername = event => {
    this.setState({
      username: event.target.value
    });
  }

  handleChangePass = event => {
    this.setState({
      password: event.target.value
    });
  }

  handleChangeRePass = event => {
    this.setState({
      rePassword: event.target.value
    });
  }

  render() {
    const { username, fullname, password, rePassword } = this.state;
    return (
      <div>
        <div style={{ backgroundColor: '#fff', padding: 15, borderRadius: 6 }}>
          <div style={{ color: '#000000', fontSize: 24, textAlign: 'center' }}>LIVE CHAT</div>
          <div style={{ paddingTop: 15 }}>
            <Input
              placeholder='Họ và tên'
              prefix={(
                <div>
                  <Icon type='edit' style={{ color: 'rgba(0,0,0,.25)' }} />
                </div>
              )}
              value={fullname}
              onChange={this.handleChangeName}
            />
          </div>
          <div style={{ paddingTop: 15 }}>
            <Input
              placeholder='Tài khoản'
              prefix={(
                <div>
                  <Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />
                </div>
              )}
              value={username}
              onChange={this.handleChangeUsername}
            />
          </div>
          <div style={{ paddingTop: 8 }}>
            <Input
              placeholder='Mật khẩu'
              prefix={(
                <div>
                  <Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />
                </div>
              )}
              type='password'
              value={password}
              onChange={this.handleChangePass}
            />
          </div>
          <div style={{ paddingTop: 8 }}>
            <Input
              placeholder='Nhập lại mật khẩu'
              prefix={(
                <div>
                  <Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />
                </div>
              )}
              type='password'
              value={rePassword}
              onChange={this.handleChangeRePass}
            />
          </div>
          <div style={{ display: 'flex', width: '100%', justifyContent: 'center', paddingTop: 25 }}>
            <Button style={{ backgroundColor: '#39d431', width: '50%', }} onClick={this.onClickLogin}>
              Đăng ký
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
