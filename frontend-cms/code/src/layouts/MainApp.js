import React, { Component } from 'react';
import { Layout } from 'antd';
import SideBar from './SideBar/SideBar';
import MainRouter from './Router/MainRouter';

class MainApp extends Component {
    render() {
        return (
            <Layout>
                <SideBar />
                <Layout className='right-layout' style={{marginLeft: '200px'}}>
                    <div id='all-content'>
                        <MainRouter />
                    </div>
                </Layout>
            </Layout>
        );
    }
}

export default MainApp;
