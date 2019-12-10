/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Row, Col, Input, Icon, Button, Modal, List } from 'antd';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

import './style.css';
import { ChatService } from '../../Services/ChatService';

var socket = require('socket.io-client')('api-dds.tuan-ltu.com');

@inject('NewsStore', 'AuthStore')
@observer
class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowEmoji: false,
            listFriends: [],
            listGroups: [],
            currentChat: -1,
            currentGroup: -1,
            isShowSetting: false,
            dataChat: [],
            listFriendOnline: [],
            chatName: '',
            chatAvatar: '',
            shared: [],
            members: [],
        };
    }

    componentDidMount() {
        this.getData();
        const userInfor = JSON.parse(localStorage.getItem('userInfor'));
        const body = {
            username: userInfor.username,
            id: userInfor.id
        };
        socket.emit('login', body);
        socket.on('getListOnline', (data) => {
            if (data) {
                this.setState({
                    listFriendOnline: data
                });
            }
        });
    }

    getData = async () => {
        const userInfor = JSON.parse(localStorage.getItem('userInfor'));
        const listFriends = await ChatService.getAllUser();
        const listGroups = await ChatService.getListRoom(userInfor.id);

        if (listFriends.errorCode === 0 && listFriends.data) {
            this.setState({
                listFriends: listFriends.data
            });
        }
        if (listGroups && listGroups.rooms) {
            this.setState({
                listGroups: listGroups.rooms
            });
        }
    }

    onCLickLogout = () => {
        const { AuthStore, history } = this.props;
        AuthStore.isLogin = false;
        localStorage.clear();
        history.push('/login');
    }

    onClickShowEmoji = () => {
        const { isShowEmoji } = this.state;
        this.setState({
            isShowEmoji: !isShowEmoji
        });
    }

    onClickItem = async (item, index) => {
        const res = await ChatService.getUserDetail(item.id);
        if (res.errorCode === 0 && res.data) {
            this.setState({
                chatName: res.data.name,
                chatAvatar: res.data.avatar
            });
        }
        this.setState({
            currentChat: index,
            currentGroup: -1
        });
    }

    onClickGroupChat = async (item, index) => {
        const res = await ChatService.getListMember(item.id);
        let nameGroup = '';
        if (res[0]) {
            res[0].members.map((item, index) => {
                if (index === res[0].members.length - 1) {
                    nameGroup += item.name;
                } else {
                    nameGroup += item.name + ', ';
                }
            });
            this.setState({
                chatName: nameGroup,
                members: res[0].members
            });
        }
        this.setState({
            currentGroup: index,
            currentChat: -1,
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
                    <Button type='primary' onClick={this.onCLickLogout}>
                        Đăng xuất
                    </Button>
                </div>
            </div>
        );
    }

    renderListFriend(item, index) {
        const { currentChat, listFriendOnline } = this.state;
        return (
            <div>
                <button className={index === currentChat ? 'containerCurrentItem' : 'containerItem'} onClick={() => this.onClickItem(item, index)}>
                    <div style={{ width: 60 }}>
                        {
                            item.avatar ?
                                <div className='avatarListFriend' style={{ backgroundImage: `url(http://${item.avatar})` }} />
                                :
                                <div className='avatarListFriend' />
                        }
                    </div>
                    <div className='cotainerListFriend'>
                        <div>
                            {item.name}
                        </div>
                        <div className='styleLastMess'>
                            {
                                listFriendOnline.map(online => {
                                    if (item.id === online.id) return (<div>Online</div>);
                                })
                            }
                        </div>
                    </div>
                </button>
            </div>

        );
    }

    renderListGroup(item, index) {
        const { currentGroup } = this.state;
        return (
            <div>
                <button className={index === currentGroup ? 'containerCurrentItem' : 'containerItem'} onClick={() => this.onClickGroupChat(item, index)}>
                    <div style={{ width: 60 }}>
                        {
                            item.avatar ?
                                <div className='avatarListFriend' style={{ backgroundImage: `url(http://${item.avatar})` }} />
                                :
                                <div className='avatarListFriend' />
                        }
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
        const { currentChat, chatName, chatAvatar } = this.state;
        return (
            <div style={{ height: '100%', overflow: 'auto', paddingTop: 60, alignItems: 'center', borderLeftStyle: 'solid', borderWidth: 1, borderColor: 'rgb(209, 195, 195)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {
                        chatAvatar && chatAvatar !== '' ?
                            <div className='bigAvatar' style={{ backgroundImage: `url(http://${chatAvatar})` }} />
                            :
                            <div className='bigAvatar' />
                    }
                    <div>{chatName}</div>
                </div>

                <div style={{ width: '100%', height: 1, backgroundColor: 'rgb(209, 195, 195)', marginTop: 10 }} />
                {
                    currentChat === -1 ? (
                        <div>
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
                                {this.state.members.map((item, index) => {
                                    return (
                                        <div key={index.toString()}>
                                            <button className='containerItem' onClick={() => this.onClickItem(item, index)}>
                                                <div style={{ width: 60 }}>
                                                    {
                                                        item.avatar ?
                                                            <div className='avatarListFriend' style={{ backgroundImage: `url(http://${item.avatar})` }} />
                                                            :
                                                            <div className='avatarListFriend' />
                                                    }
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
                        </div>
                    ) : null
                }

                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingLeft: 15, paddingRight: 10, paddingTop: 5 }}>
                    <div style={{ fontSize: 15, color: 'rgba(0, 0, 0, .34)', fontFamily: 'inherit' }}>
                        Được chia sẻ
                    </div>
                    {this.state.shared.map((item, index) => {
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
        const { chatName, chatAvatar, isShowEmoji } = this.state;
        console.log('asdf', isShowEmoji);
        return (
            <div style={{ height: '100vh' }}>
                <div className='topBar'>
                    <div className='styleChildrenTop'>
                        {
                            chatAvatar && chatAvatar !== '' ?
                                <div className='avatarListFriend' style={{ backgroundImage: `url(http://${chatAvatar})` }} />
                                :
                                <div className='avatarListFriend' />
                        }
                        <div>{chatName}</div>
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
                    <Col span={16}>
                        <div>
                            <List
                                className="listMess"
                                itemLayout='horizontal'
                                dataSource={this.state.dataChat}
                                renderItem={(item, index) => this.renderListMess(item, index)}
                            />
                            <div className='bottomBar'>
                                {
                                    isShowEmoji ?
                                        <Picker style={{ position: 'absolute', bottom: 70, right: 10 }} />
                                        : null
                                }
                                <textarea placeholder='write a message...' className='styleTextArea' />
                                <div>
                                    <Button type='link' onClick={this.onClickShowEmoji}>
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
                    </Col>
                    <Col span={8}>
                        {this.renderSiderChat()}
                    </Col>

                </div>

            </div>
        );
    }

    render() {
        const { currentChat, isShowSetting, currentGroup } = this.state;
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
                                    <div style={{ fontSize: 15, color: 'rgba(0, 0, 0, .34)', fontFamily: 'inherit' }}>
                                        Bạn bè
                                    </div>
                                    {this.state.listFriends.map((item, index) => this.renderListFriend(item, index))}
                                </div>
                                <div className='styleLine' />
                                <div>
                                    <div style={{ fontSize: 15, color: 'rgba(0, 0, 0, .34)', fontFamily: 'inherit' }}>
                                        Nhóm
                                    </div>
                                    {this.state.listGroups.map((item, index) => this.renderListGroup(item, index))}
                                </div>
                            </div>

                        </div>
                    </Col>
                    <Col span={18}>
                        {
                            currentChat !== -1 || currentGroup !== -1 ?
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
