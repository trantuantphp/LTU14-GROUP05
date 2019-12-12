import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import Search from 'antd/lib/input/Search';
import { inject, observer } from 'mobx-react';

import logo from '../../assets/logo.png';
import smartphone from '../../assets/smartphone.png';
import device from '../../assets/device.png';
import laptop from '../../assets/laptop.png';
import tablet from '../../assets/tablet.png';
import cart from '../../assets/cart.png';

@inject('Header')
@observer
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    onSearch = (value) => {
        console.log(value)
    }

    handleLogin = () => {
        const { Header } = this.props;
        Header.showModalLogin = true;
    }

    handleRegister = () => {
        const { Header } = this.props;
        Header.showModalRegister = true;
    }

    render() {
        return (
            <div style={{ width: '100%', height: 100, backgroundColor: '#03ecfc80', alignItems: 'center' }}>
                <Row type='flex' align='middle' justify='space-between' style={{ height: '100%' }}>
                    <Col>
                        <img src={logo} alt="" style={{ width: 60, height: 40 }} />
                    </Col>
                    <Col span={8}>
                        <Search
                            placeholder="Search..."
                            enterButton="Search"
                            onSearch={this.onSearch}
                        />
                    </Col>
                    <Col span={9}>
                        <Row type='flex' justify='space-between'>
                            <Col>
                                <Button style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}>
                                    <img src={smartphone} alt="" style={{ width: 30, height: 30 }} />
                                    <div>Điện thoại</div>
                                </Button>

                            </Col>
                            <Col>
                                <Button style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}>
                                    <img src={tablet} alt="" style={{ width: 30, height: 30 }} />
                                    <div>Tablet/Ipad</div>
                                </Button>
                            </Col>
                            <Col>
                                <Button style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}>
                                    <img src={laptop} alt="" style={{ width: 30, height: 30 }} />
                                    <div>Laptop</div>
                                </Button>
                            </Col>
                            <Col>
                                <Button style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}>
                                    <img src={device} alt="" style={{ width: 30, height: 30 }} />
                                    <div>Phụ kiện</div>
                                </Button>
                            </Col>
                            <Col>
                                <Button style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}>
                                    <img src={cart} alt="" style={{ width: 30, height: 30 }} />
                                    <div>Giỏ hàng</div>
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={4} style={{ paddingRight: 25, paddingLeft: 25 }}>
                        <Row type="flex" justify='space-between'>
                            <Col>
                                <Button type="primary" onClick={this.handleLogin}>Đăng nhập</Button>
                            </Col>
                            <Col>
                                <Button onClick={this.handleRegister}>Đăng ký</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Header;
