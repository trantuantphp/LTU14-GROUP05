import React, { Component } from 'react';
import { Form, Input, Button, Row, Col, Alert } from 'antd';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false,
            errors: false
        };
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                if (
                    values.username === 'duclongtb9797' &&
                    values.password === 'duclongtb9797'
                ) {
                    this.setState(() => ({
                        redirectToReferrer: true
                    }));

                    localStorage.setItem('auth', JSON.stringify(values));
                } else
                    this.setState({
                        errors: true
                    });
            }
        });
    };

    renderRedirect = () => {
        if (this.state.redirectToReferrer) {
            console.log('....aaaaaaa');

            return <Redirect to='/home' />;
        }
    };

    handleClose = () => {
        this.setState({
            errors: false
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;

        const configPass = {
            rules: [
                {
                    required: true,
                    message: 'Mật khẩu là bắt buộc'
                },
                // {
                //     min: 6,
                //     message: t('Mật khẩu phải lớn hơn 6 ký tự')
                // },
                {
                    // pattern:'^[a-zA-Z0-9_.-]*$',
                    pattern: '^[a-zA-Z0-9_.-]{6,50}$',
                    message:
                        'Mật khẩu chỉ bao gồm ký tự và số, độ dài phải lớn hơn 6 ký tự'
                }
            ]
        };

        const config = {
            rules: [
                {
                    required: true,
                    message: 'Tài khoản là bắt buộc'
                },
                // {
                //     validator: this.handleValidate
                // },
                {
                    pattern: '^[-_a-zA-Z0-9]+$',
                    message: 'Tài khoản không hợp lệ'
                }
            ]
        };

        let { errors } = this.state;
        return (
            <Row type='flex' justify='space-around'>
                {this.renderRedirect()}
                <Col span={6}>
                    <Form onSubmit={this.handleSubmit} className='form-login'>
                        <Form.Item className='title'>Đăng nhập hệ thống</Form.Item>

                        <Form.Item>
                            <label htmlFor='username'>Tài khoản</label>
                            {getFieldDecorator('username', config)(
                                <Input
                                    ref={input => {
                                        this.username = input;
                                    }}
                                    name='username'
                                    // onChange={onInput}
                                    // id='error'
                                    autoComplete='off'
                                />
                            )}
                        </Form.Item>
                        <Form.Item>
                            <label>Mật khẩu</label>
                            {getFieldDecorator('password', configPass)(
                                <Input.Password
                                    autoFocus
                                    name='password'
                                    // onChange={onInput}
                                />
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button
                                className='login-form-btn'
                                type='danger'
                                htmlType='submit'
                            >
                                Đăng nhập
                            </Button>
                        </Form.Item>
                        <Form.Item>
                            {errors ? (
                                <Alert
                                    message='Nhập sai tài khoản hoặc mật khẩu'
                                    type='error'
                                    showIcon
                                    closable
                                    afterClose={this.handleClose}
                                />
                            ) : (
                                ''
                            )}
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        );
    }
}

export default Form.create()(Login);
