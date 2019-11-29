import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Row, Col, Input, Icon, Button, Modal } from 'antd';

@inject('NewsStore')
@observer
class HomeScreen extends Component {
    render() {
        return (
            <div>
                <Row type='flex'>
                    <Col span={6}>
                        <div
                            style={{
                                borderWidth: 1,
                                borderRightStyle: 'solid',
                                borderColor: '#e6e6e6',
                                height: '100vh'
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    padding: 10,
                                    borderBottomStyle: 'solid',
                                    borderWidth: 1
                                }}
                            >
                                <div>
                                    <Button type='link'>
                                        <Icon type='setting' />
                                    </Button>
                                </div>
                                <div>
                                    <Button
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <Icon type='usergroup-add' />
                                        <div style={{ marginLeft: 10 }}>
                                            Tạo nhóm
                                        </div>
                                    </Button>
                                </div>
                            </div>
                            <div
                                style={{
                                    paddingTop: 5,
                                    paddingLeft: 10,
                                    paddingRight: 10
                                }}
                            >
                                <Input
                                    placeholder='search'
                                    prefix={<Icon type='search' />}
                                />
                            </div>
                        </div>
                    </Col>
                    <Col span={18}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                paddingTop: 30,
                                height: '100vh'
                            }}
                        >
                            <h1>Welcome to Live chat</h1>
                            <div>asdfasdfsdfasdf</div>
                        </div>
                        <Modal visible footer={false} centered>
                            <div
                                style={{
                                    display: 'flex',
                                    width: '100%',
                                    flexDirection: 'column',
                                    alignItems: 'center'
                                }}
                            >
                                <div>Avatar</div>
                                <div style={{ width: '100%' }}>
                                    <div>
                                        <Button
                                            type='link'
                                            style={{
                                                display: 'flex',
                                                width: '100%',
                                                justifyContent: 'space-between'
                                            }}
                                        >
                                            <div>Đổi mật khẩukhẩu</div>
                                            <div>icon</div>
                                        </Button>
                                        <div
                                            style={{
                                                width: '100%',
                                                height: 1,
                                                backgroundColor: '#cfd7e6'
                                            }}
                                        />
                                    </div>
                                    <div style={{marginTop: 10}}>
                                        <Button
                                            type='link'
                                            style={{
                                                display: 'flex',
                                                width: '100%',
                                                justifyContent: 'space-between'
                                            }}
                                        >
                                            <div>Đổi tên</div>
                                            <div>icon</div>
                                        </Button>
                                        <div
                                            style={{
                                                width: '100%',
                                                height: 1,
                                                backgroundColor: '#cfd7e6'
                                            }}
                                        />
                                    </div>
                                </div>
                                <div style={{display:'flex', width:'100%', justifyContent:'space-between', marginTop: 20}}>
                                    <Button>
                                        Đóng
                                    </Button>
                                    <Button type='primary'>
                                        Xác nhận
                                    </Button>
                                </div>
                            </div>
                        </Modal>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default HomeScreen;
