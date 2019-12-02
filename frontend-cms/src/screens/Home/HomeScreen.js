import React, { Component } from 'react';
import { Row, Col } from 'antd';

class HomeScreen extends Component {
    render() {
        return (
            <Row>
                <Col span={18} offset={3}>Home</Col>
            </Row>
        );
    }
}

export default HomeScreen;
