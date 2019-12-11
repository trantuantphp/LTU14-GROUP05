import React, { Component } from 'react';
import Search from 'antd/lib/input/Search';
import { Button, Checkbox } from 'antd';
import { inject, observer } from 'mobx-react';

import './style.css';
import { ChatService } from '../../Services/ChatService';

var socket = require('socket.io-client')('api-dds.tuan-ltu.com');

@inject('ChatStore')
@observer
class Group extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrMember: [],
        };
    }

    handleCheck = (item, index) => {
        const { arrMember } = this.state;
        const arr = arrMember;
        let indTemp = -1;
        if (arr.length > 0) {
            arr.map((member, indMem) => {
                if (item.id === member.id) {
                    indTemp = indMem;
                }
            });
            if (indTemp >= 0) {
                arr.splice(indTemp, 1);
            } else {
                arr.push(item);
            }
        } else {
            arr.push(item);
        }
        this.setState({
            arrMember: arr
        });
    }

    onClickCreate = async () => {
        const { userInfor, ChatStore, isAddMember, roomId } = this.props;
        if (this.state.arrMember.length > 0) {
            if (!isAddMember) {
                const res = await ChatService.createRoom(userInfor.name, userInfor.id);
                if (res && res.errorCode === 0 && res.data) {
                    this.handleAddMember(this.state.arrMember, res.data.room_id);
                    const listGroups = await ChatService.getListRoom(userInfor.id);
                    if (listGroups && listGroups.rooms) {
                        const arrRoom = [];
                        listGroups.rooms.map(item => {
                            arrRoom.push(item.id);
                        });
                        socket.emit('joinListRoom', arrRoom);
                        ChatStore.setListGroup(listGroups.rooms);
                    }
                    ChatStore.isShowGroup = false;
                }
            } else {
                this.handleAddMember(this.state.arrMember, roomId);
                const res = await ChatService.getListMember(roomId);
                if (res) {
                    ChatStore.setMembers(res[0].members);
                    ChatStore.isShowGroup = false;
                }
            }
        } else {
            alert('Vui lòng chọn thành viên');
        }

    }

    async handleAddMember(arrMember, roomId) {
        const { listFriendOnline } = this.props;
        for (var i = 0; i < arrMember.length; i++) {
            const res = await ChatService.addMember(roomId, arrMember[i].id);
            if (res && res.errorCode === 0) {
                listFriendOnline.map(item => {
                    if (arrMember[i].id === item.id) {
                        const body = {
                            room_id: roomId,
                            member_id: arrMember[i].id,
                            socket_id: item.socket
                        };
                        socket.emit('addMember', body);
                    }
                });
            }
        }
    }

    renderMember = (item, index, userInfor) => {
        if (item.id !== userInfor.id) {
            return (
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10, paddingLeft: 10 }}>
                    <Checkbox onChange={() => this.handleCheck(item, index)} />
                    <div style={{ width: 40, marginLeft: 10, marginRight: 5 }}>
                        {item.avatar ? (
                            <div
                                className='avatarListFriend'
                                style={{
                                    backgroundImage: `url(http://${item.avatar})`
                                }}
                            />
                        ) : (
                                <div className='avatarListFriend' />
                            )}
                    </div>
                    <div>
                        {item.name}
                    </div>
                </div>
            );
        }
    }

    render() {
        const { dataUser, userInfor, isAddMember } = this.props;
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div>
                    <div style={{ display: 'flex', padding: 15 }}>
                        <div>
                            <Search
                                placeholder="input search text"
                                onSearch={value => console.log(value)}
                                style={{ width: 300 }}
                            />
                        </div>
                        <div style={{ marginLeft: 40 }}>
                            <Button type='primary' onClick={this.onClickCreate}>
                                {!isAddMember ? 'Tạo nhóm' : 'Thêm thành viên'}
                            </Button>
                        </div>
                    </div>
                    <div style={{ width: '100%', height: 1, backgroundColor: '#000000', marginBottom: 10 }} />
                    <div style={{ overflow: 'auto', height: 200 }}>
                        {dataUser.map((item, index) => this.renderMember(item, index, userInfor))}
                    </div>
                </div>

            </div>
        );
    }
}

export default Group;
