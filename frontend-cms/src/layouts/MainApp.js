import React, { Component } from 'react';
import { Layout } from 'antd';
import SideBar from './SideBar/SideBar';
import Router from './Router/Router';

class MainApp extends Component {
    render() {
        return (
            <Layout>
                <SideBar />
                <Layout className='right-layout'>
                    <div id='all-content'>
                        <Router />
                    </div>
                </Layout>
            </Layout>
        );
    }
}

export default MainApp;
