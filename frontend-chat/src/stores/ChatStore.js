import { observable, action } from 'mobx';

export default class ChatStore {

    @observable listGroup = [];

    @observable isShowGroup = false;

    @observable chatName = '';

    @observable members = [];

    @action
    setListGroup(group) {
        this.listGroup = group;
    }

    @action
    setChatName(name) {
        this.chatName = name;
    }

    @action
    setMembers(members) {
        this.members = members;
    }
}
