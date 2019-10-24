import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Table, Button, Row, Col, Divider } from 'antd';
import SearchBar from './SearchBar';

const data = [
    {
        key: '1',
        name: 'John Brown',
        tel: 325454545544545,
        username: 'long.nd'
    },
    {
        key: '2',
        name: 'Lim Green',
        tel: 325454545544545,
        username: 'viporo9x'
    },
    {
        key: '3',
        name: 'Moe Black',
        tel: 325454545544545,
        username: 'dangcapmaivip'
    },
    {
        key: '4',
        name: 'Qim Red',
        tel: 325454545544545,
        username: 'vodanh9x'
    },
    {
        key: '5',
        name: 'Duc Minh',
        tel: 325454545544545,
        username: 'HoanKiem'
    }
];
class dashboard extends Component {
    state = {
        redirect: false,
        dataAuth: '',
        filteredInfo: null,
        sortedInfo: null,
        dataFilter: []
    };

    async componentWillMount() {
        await this.setState({
            dataAuth: localStorage.getItem('auth')
        });
    }

    componentDidMount() {
        this.setState({
            dataFilter: data
        });
    }

    setRedirect = () => {
        localStorage.removeItem('auth');
        this.setState({
            redirect: true
        });
    };

    renderRedirect = () => {
        if (this.state.redirect) {
            console.log('aaaaaa');

            return <Redirect to='/login' />;
        }
    };

    handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        this.setState({
            filteredInfo: filters,
            sortedInfo: sorter
        });
    };

    clearFilters = () => {
        this.setState({ filteredInfo: null });
    };

    clearAll = () => {
        this.setState({
            filteredInfo: null,
            sortedInfo: null
        });
    };

    setAgeSort = () => {
        this.setState({
            sortedInfo: {
                order: 'descend',
                columnKey: 'tel'
            }
        });
    };

    onChangeInput = ({ currentTarget: input }) => {
        let currentList = [];
        let newList = [];

        if (input.value !== '') {
            currentList = data;
            let inputValue = input.value;
            newList = currentList.filter(item => {
                // console.log(typeof(inputValue));
                return item.name.indexOf(inputValue.toLowerCase()) !== -1;
            });
        } else {
            newList = data;
        }
        this.setState({
            dataFilter: newList
        });
        console.log(input.value);
    };

    render() {
        let { dataAuth } = this.state;
        let { sortedInfo, filteredInfo, dataFilter } = this.state;
        sortedInfo = sortedInfo || {};
        filteredInfo = filteredInfo || {};
        const columns = [
            {
                title: 'Tên tài khoản',
                dataIndex: 'name',
                key: 'name',

                filteredValue: filteredInfo.name || null,
                onFilter: (value, record) => record.name.includes(value),
                sorter: (a, b) => a.name.length - b.name.length,
                sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
                ellipsis: true
            },
            {
                title: 'Số điện thoại',
                dataIndex: 'tel',
                key: 'tel',
                sorter: (a, b) => a.tel - b.tel,
                sortOrder: sortedInfo.columnKey === 'tel' && sortedInfo.order,
                ellipsis: true
            },
            {
                title: 'Tên đăng nhập',
                dataIndex: 'username',
                key: 'username',
                filteredValue: filteredInfo.username || null,
                onFilter: (value, record) => record.username.includes(value),
                sorter: (a, b) => a.username.length - b.username.length,
                sortOrder:
                    sortedInfo.columnKey === 'username' && sortedInfo.order,
                ellipsis: true
            },
            {
                title: 'Action',
                key: 'action',
                render: (text, record) => (
                    <span>
                        <a>Chi tiết</a>
                        <Divider type='vertical' />
                        <a>Xóa</a>
                    </span>
                )
            }
        ];
        if (dataAuth)
            return (
                <Row type='flex' justify='space-between' className='dashboard'>
                    <Col span={16} offset={4}>
                        {this.renderRedirect()}
                        <Button
                            onClick={this.setRedirect}
                            className='btn-logout'
                        >
                            LOGOUT
                        </Button>
                        <SearchBar
                            onChangeInput={values => this.onChangeInput(values)}
                            style={{ marginBottom: '20px' }}
                        />
                        <Table
                            columns={columns}
                            dataSource={dataFilter}
                            onChange={this.handleChange}
                        />
                    </Col>
                </Row>
            );
        else
            return (
                <div>
                    {this.renderRedirect()}
                    <div>Bạn cần đăng nhập để có thể truy cập</div>
                    <button onClick={this.setRedirect}>Login</button>
                </div>
            );
    }
}

export default dashboard;
