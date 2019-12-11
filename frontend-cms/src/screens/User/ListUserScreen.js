import React, { Component } from 'react';
import { toJS } from 'mobx';
import { inject, observer } from 'mobx-react';
import _ from 'lodash';
import { Table, Divider, Tag } from 'antd';
import Func from 'helpers/function';

class ListUserScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listUser: []
        };
        
    }
    getData = async () => {
        let json = {
            url: '/user',
            body: {}
        };
        let data = await Func.callApi(json);
        return data.data.data;
    }
    async componentDidMount() {
        let data = await this.getData();
        console.log(data);
        this.setState({
            listUser: data
        });
    }

    render() {
        const columns = [
            {
                title: 'Tên',
                dataIndex: 'name',
                key: 'name'
            },
            {
                title: 'Tài khoản',
                dataIndex: 'username',
                key: 'username'
            },
            {
                title: 'Trạng thái',
                dataIndex: 'status',
                key: 'status'
            }
        ];

        if (_.isEmpty(this.state.listUser)) {
            return <div />;
        } else {
            return (
                <div>
                    <h3>Danh sách người dùng</h3>
                    <Table columns={columns} dataSource={this.state.listUser} />
                </div>
            );
        }
    }
}

export default inject('UserStore')(observer(ListUserScreen));
