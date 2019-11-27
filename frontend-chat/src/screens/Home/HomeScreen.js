import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Row, Col, Input, Icon, Button } from 'antd';

@inject('NewsStore')
@observer
class HomeScreen extends Component {
    render() {
        return (
            <Row type="flex">
                <Col span={6}>
                    <div style={{ borderWidth: 1, borderRightStyle: 'solid', borderColor: '#e6e6e6', height: '100vh' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: 10, borderBottomStyle: 'solid', borderWidth: 1 }}>
                            <div>
                                <Button type='link'>
                                    <Icon type='setting' />
                                </Button>
                            </div>
                            <div>
                                <Button style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Icon type="usergroup-add" />
                                    <div style={{ marginLeft: 10 }}>Tạo nhóm</div>
                                </Button>
                            </div>
                        </div>
                        <div style={{ paddingTop: 5, paddingLeft: 10, paddingRight: 10 }}>
                            <Input
                                placeholder='search'
                                prefix={<Icon type='search' />}
                            />
                        </div>
                    </div>
                </Col>
                <Col span={18}>
                    <div style={{ height: '100vh' }} />
                </Col>
            </Row>
        );
    }
}

export default HomeScreen;
