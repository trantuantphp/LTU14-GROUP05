import React, { Component } from 'react';
import { Layout } from 'antd';
import MainMenu from './MainMenu'; 

const { Sider } = Layout;

class SideBar extends Component {
    render() {
        return (
            <Sider
                className='left-layout'
                style={{
                    height: '100vh',
                    position: 'fixed',
                    left: 0
                }}
            >
                <div id='side-bar'>
                    <MainMenu />
                </div>
            </Sider>
        );
    }
}

export default SideBar;
