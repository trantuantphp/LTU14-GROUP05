import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

const { Item } = Menu;

class MainMenu extends Component {
    constructor(props) {
        super(props);
    }
    renderMenu = () => {

    }
    render() {
        return (
            <div>
                <Menu mode='inline'>
                    <Item>
                        <Icon type='user' />
                        <span>Quản lý tài khoản</span>
                    </Item>
                </Menu>
            </div>
        );
    }
}

export default MainMenu;
