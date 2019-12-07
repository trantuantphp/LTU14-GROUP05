/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Row, Col, Input, Icon, Button, Modal, List } from 'antd';

import './style.css';
import TextArea from 'antd/lib/input/TextArea';

@inject('NewsStore')
@observer
class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: 1, name: 'Tuấn Nguyễn', lastMess: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' },
                { id: 2, name: 'Tuấn Trần', lastMess: 'aaaaaaaaaa' },
                { id: 3, name: 'Long Nguyễn', lastMess: 'aaaaaaaaaa' },
                { id: 4, name: 'Đỗ Việt Hưng', lastMess: 'aaaaaaaaaa' },
                { id: 5, name: 'Trang Nguyễn', lastMess: 'aaaaaaaaaa' },
            ],
            currentChat: 1,
            isShowSetting: false,
            dataChat: [
                { id: 1, name: 'Tuấn Nguyễn', mess: 'fffffff' },
                { id: 2, name: 'Tuấn Nguyễn', mess: 'asdfasdfasdfasdf' },
                { id: 1, name: 'Tuấn Nguyễn', mess: 'asdfasdfasdfasdf' },
                { id: 2, name: 'Tuấn Nguyễn', mess: 'asdfasdfasdfasdf' },
                { id: 1, name: 'Tuấn Nguyễn', mess: 'asdfasdfasdfasdf' },
                { id: 2, name: 'Tuấn Nguyễn', mess: 'asdfasdfasdfasdf' },
                { id: 1, name: 'Tuấn Nguyễn', mess: 'asdfasdfasdfasdf' },
                { id: 1, name: 'Tuấn Nguyễn', mess: 'asdfasdfasdfasdf' },
                { id: 2, name: 'Tuấn Nguyễn', mess: 'asdfasdfasdfasdf' },
                { id: 1, name: 'Tuấn Nguyễn', mess: 'asdfasdfasdfasdf' },
                { id: 2, name: 'Tuấn Nguyễn', mess: 'asdfasdfasdfasdf' },
                { id: 1, name: 'Tuấn Nguyễn', mess: 'asdfasdfasdfasdf' },
                { id: 2, name: 'Tuấn Nguyễn', mess: 'asdfasdfasdfasdf' },
                { id: 1, name: 'Tuấn Nguyễn', mess: 'asdfasdfasdfasdf' },
                { id: 1, name: 'Tuấn Nguyễn', mess: 'asdfasdfasdfasdf' },
                { id: 2, name: 'Tuấn Nguyễn', mess: 'asdfasdfasdfasdf' },
                { id: 1, name: 'Tuấn Nguyễn', mess: 'asdfasdfasdfasdf' },
                { id: 1, name: 'Tuấn Nguyễn', mess: 'asdfasdfasdfasdf' },
                { id: 1, name: 'Tuấn Nguyễn', mess: 'asdfasdfasdfasdf' },
                { id: 2, name: 'Tuấn Nguyễn', mess: 'asdfasdfasdfasdf' },
                { id: 2, name: 'Tuấn Nguyễn', mess: 'asdfasdfasdfasdf' },
                { id: 2, name: 'Tuấn Nguyễn', mess: 'asdfasdfasdfasdf' },
                { id: 2, name: 'Tuấn Nguyễn', mess: 'asdfasdfasdfasdf' },
                { id: 2, name: 'Tuấn Nguyễn', mess: 'asdfasdfasdfasdf' },
                { id: 2, name: 'Tuấn Nguyễn', mess: 'asdfasdfasdfasdf' },
                { id: 2, name: 'Tuấn Nguyễn', mess: 'asdfasdfasdfasdf' },
                { id: 2, name: 'Tuấn Nguyễn', mess: 'asdfasdfasdfasdf' },
                { id: 2, name: 'Tuấn Nguyễn', mess: 'asdfasdfasdfasdf' },
                { id: 2, name: 'Tuấn Nguyễn', mess: 'asdfasdfasdfasdf' },
                { id: 2, name: 'Tuấn Nguyễn', mess: 'asdfasdfasdfasdf' },
                { id: 2, name: 'Tuấn Nguyễn', mess: 'asdfasdfasdfasdf' },
                { id: 2, name: 'Tuấn Nguyễn', mess: 'asdfasdfasdfasdf' },
                { id: 2, name: 'Tuấn Nguyễn', mess: 'asdfasdfasdfasdf' },
                { id: 1, name: 'Tuấn Nguyễn', mess: 'asdfasdfasdfasdf' },
                { id: 2, name: 'Tuấn Nguyễn', mess: 'asdfasdfasdfasdf' },
                { id: 2, name: 'Tuấn Nguyễn', mess: 'asdfasdfasdfasdf' },
                { id: 1, name: 'Tuấn Nguyễn', mess: 'asdfasdfasdfasdf' },
                { id: 2, name: 'Tuấn Nguyễn', mess: 'asdfasdfasdfasdf' },
                { id: 1, name: 'Tuấn Nguyễn', mess: 'asdfasdfasdfasdf' },
                { id: 2, name: 'Tuấn Nguyễn', mess: 'asdfasdfasdfasdf' },
                { id: 2, name: 'Tuấn Nguyễn', mess: 'asdfasdfasdfasdf' },
                { id: 1, name: 'Tuấn Nguyễn', mess: 'asdfasdfasdfasdf' },
                { id: 2, name: 'Tuấn Nguyễn', mess: 'asdfasdfasdfasdf' },
                { id: 1, name: 'Tuấn Nguyễn', mess: 'asdfasdfasdfasdf' },
                { id: 1, name: 'Tuấn Nguyễn', mess: 'aaaaaaaaasdfasdfaslkdfhlasjdflkasjdflkjasdlkfjasldkfjalksdfjlsakdjflaksjdflaskjdflkasjdflaskjdflkasjfdlkasjfdlkasjflkasjdflksajdfasdlkfjasldkffjlsakdjflaksjdflaskjdflkasjdflaskjdflkasjfdlkasjfdlkasjflkasjdflksajdfasdlkfjasldkfj' },

            ]
        };
    }

    onClickItem = (item, index) => {
        this.setState({
            currentChat: index
        });
    }

    onClickSetting = () => {
        this.setState({
            isShowSetting: true
        });
    }

    onCancelSetting = () => {
        this.setState({
            isShowSetting: false
        });
    }

    renderSetting() {
        return (
            <div className='containerSetting'>
                <div className='bigAvatar'>
                    ava
                </div>
                <div style={{ width: '100%' }}>
                    <div>
                        <Button type='link' style={{ width: '100%' }}>
                            <div className='styleBtnSetting'>
                                <div style={{ color: '#000000' }}>Đổi mật khẩu</div>
                                <div>
                                    <Icon type='right' style={{ color: '#000000' }} />
                                </div>
                            </div>
                        </Button>
                        <div className='styleLine' />
                    </div>
                    <div style={{ marginTop: 10 }}>
                        <Button type='link' style={{ width: '100%' }}>
                            <div className='styleBtnSetting'>
                                <div style={{ color: '#000000' }}>Đổi tên</div>
                                <div>
                                    <Icon type='right' style={{ color: '#000000' }} />
                                </div>
                            </div>
                        </Button>
                        <div className='styleLine' />
                    </div>
                </div>
                <div className='styleBtnBottom'>
                    <Button onClick={this.onCancelSetting}>
                        Đóng
                    </Button>
                    <Button type='primary'>
                        Xác nhận
                    </Button>
                </div>
            </div>
        );
    }

    renderListFriend(item, index) {
        const { currentChat } = this.state;
        return (
            <div>
                <button className={index === currentChat ? 'containerCurrentItem' : 'containerItem'} onClick={() => this.onClickItem(item, index)}>
                    <div style={{ width: 60 }}>
                        <div className='avatarListFriend'>
                            ava
                        </div>
                    </div>
                    <div className='cotainerListFriend'>
                        <div>
                            {item.name}
                        </div>
                        <div className='styleLastMess'>
                            {item.lastMess}
                        </div>
                    </div>
                </button>
            </div>

        );
    }

    renderListMess(item, index) {
        return (
            <div>
                {
                    item.id === 1 ? (
                        <div style={{ display: 'flex', alignItems: 'center', padding: 10 }}>
                            <div style={{ width: 40, marginRight: 10 }}>
                                {
                                    index.id === 1 ? null
                                        :
                                        <div style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: 'red' }} />
                                }
                            </div>
                            <div style={{ display: 'flex', width: '100%', flexWrap: 'wrap', wordBreak: 'break-all' }}>{item.mess}</div>
                        </div>
                    )
                        : (
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: 10 }}>
                                <div style={{ display: 'flex', maxWidth: '100%', wordBreak: 'break-all', textAlign: 'right' }}>{item.mess}</div>
                                <div style={{ width: 40, marginLeft: 10 }}>
                                    <div style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: 'red' }} />
                                </div>
                            </div>
                        )
                }
            </div>
        );
    }

    renderSiderChat() {
        return (
            <div style={{ display: 'flex', width: '100%', height: '100%', flexDirection: 'column', overflow: 'scroll', paddingTop: 60, alignItems: 'center', borderLeftStyle: 'solid', borderWidth: 1, borderColor: 'rgb(209, 195, 195)' }}>
                <div className='bigAvatar'>
                    ava
                </div>
                <div>
                    Ten nhom
                </div>
                <div style={{ width: '100%', height: 1, backgroundColor: 'rgb(209, 195, 195)', marginTop: 10 }} />
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingLeft: 15, paddingRight: 10, paddingTop: 5 }}>
                    <div style={{ fontSize: 15, color: 'rgba(0, 0, 0, .34)', fontFamily: 'inherit' }}>
                        Tuỳ chọn
                    </div>
                    <Button type='link' style={{ width: '100%' }}>
                        <div style={{ width: '100%', display: 'flex', position: 'absolute', left: 0, justifyContent: 'space-between', alignItems: 'center', bottom: 5 }}>
                            <div>
                                Đổi tên nhóm
                            </div>
                            <div>
                                <Icon type='edit' />
                            </div>
                        </div>
                    </Button>
                    <Button type='link' style={{ width: '100%', marginTop: 10 }}>
                        <div style={{ width: '100%', display: 'flex', position: 'absolute', left: 0, justifyContent: 'space-between', alignItems: 'center', bottom: 5 }}>
                            <div>
                                Đổi avatar
                            </div>
                            <div>
                                <Icon type='swap' />
                            </div>
                        </div>
                    </Button>
                </div>
                <div style={{ width: '100%', height: 1, backgroundColor: 'rgb(209, 195, 195)', marginTop: 10 }} />
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingLeft: 15, paddingRight: 10, paddingTop: 5 }}>
                    <div style={{ fontSize: 15, color: 'rgba(0, 0, 0, .34)', fontFamily: 'inherit' }}>
                        Thành viên
                    </div>
                    <Button type='link' style={{ width: '100%' }}>
                        <div style={{ width: '100%', display: 'flex', position: 'absolute', left: 0, alignItems: 'center', bottom: 5 }}>
                            <div>
                                <Icon type='user-add' />
                            </div>
                            <div style={{ marginLeft: 5 }}>
                                Thêm thành viên
                            </div>
                        </div>
                    </Button>
                    {this.state.data.map((item, index) => {
                        return (
                            <div key={index.toString()}>
                                <button className='containerItem' onClick={() => this.onClickItem(item, index)}>
                                    <div style={{ width: 60 }}>
                                        <div className='avatarListFriend'>
                                            ava
                                        </div>
                                    </div>
                                    <div className='cotainerListFriend'>
                                        <div>
                                            {item.name}
                                        </div>
                                    </div>
                                </button>
                            </div>
                        );
                    })}
                </div>
                <div style={{ width: '100%', height: 1, backgroundColor: 'rgb(209, 195, 195)', marginTop: 10 }} />
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingLeft: 15, paddingRight: 10, paddingTop: 5 }}>
                    <div style={{ fontSize: 15, color: 'rgba(0, 0, 0, .34)', fontFamily: 'inherit' }}>
                        Được chia sẻ
                    </div>
                    {this.state.data.map((item, index) => {
                        return (
                            <div key={index.toString()}>
                                <div>
                                    {item.name}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }

    renderChat() {
        return (
            <div style={{ height: '100vh' }}>
                <div className='topBar'>
                    <div className='styleChildrenTop'>
                        <div>avatar</div>
                        <div>Name</div>
                    </div>
                    <div className='styleChildrenTop'>
                        <div>
                            icon
                        </div>
                        <div>
                            avtive
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', height: '94%' }}>
                    <div>
                        <List
                            className="listMess"
                            itemLayout='horizontal'
                            dataSource={this.state.dataChat}
                            renderItem={(item, index) => this.renderListMess(item, index)}
                        />
                        <div className='bottomBar'>
                            <textarea placeholder='write a message...' className='styleTextArea' />
                            <div>
                                <Button type='link'>
                                    <Icon type='smile' style={{ fontSize: 30, color: '#000000' }} />
                                </Button>
                            </div>
                            <div>
                                <Button type='link'>
                                    <Icon type='folder' style={{ fontSize: 30, color: '#000000' }} />
                                </Button>
                            </div>
                            <div>
                                <Button type='link'>
                                    <img src={require('../../assets/images/send.png')} alt='sned' width='30' height='30' />
                                </Button>
                            </div>
                        </div>
                    </div>
                    <Col span={8}>
                        {this.renderSiderChat()}
                    </Col>

                </div>

            </div>
        );
    }

    render() {
        const { currentChat, isShowSetting } = this.state;
        return (
            <div>
                <Row type='flex'>
                    <Col span={6}>
                        <div className='containerLeftMenu'>
                            <div className='topLeftmenu'>
                                <div>
                                    <Button type='link' onClick={this.onClickSetting}>
                                        <Icon type='setting' />
                                    </Button>
                                </div>
                                <div>
                                    <Button>
                                        <div className='btnCreateGroup'>
                                            <Icon type='usergroup-add' />
                                            <div style={{ marginLeft: 10 }}>
                                                Tạo nhóm
                                            </div>
                                        </div>
                                    </Button>
                                </div>
                            </div>
                            <div className='searchInput'>
                                <Input
                                    placeholder='search'
                                    prefix={<Icon type='search' />}
                                />
                                <div>
                                    {this.state.data.map((item, index) => this.renderListFriend(item, index))}
                                </div>
                            </div>

                        </div>
                    </Col>
                    <Col span={18}>
                        {
                            currentChat !== -1 ?
                                this.renderChat()
                                : (
                                    <div className='mainContainer'>
                                        <h1>Welcome to Live chat</h1>
                                        <div>asdfasdfsdfasdf</div>
                                    </div>
                                )
                        }
                        <Modal visible={isShowSetting} footer={false} centered onCancel={this.onCancelSetting}>
                            {this.renderSetting()}
                        </Modal>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default HomeScreen;
