import { observable, action } from 'mobx';

export default class AuthStore {
    @observable isShowModalRegister = false;

    @observable isLogin = false;

    @observable userInfor = null;

    @observable socketInfor = null;

    @action
    setSocketInfor(socketInfor) {
        localStorage.setItem('socketInfor', JSON.stringify(socketInfor));
        this.socketInfor = socketInfor;
    }

    @action
    setUserInfor(infor) {
        localStorage.setItem('userInfor', JSON.stringify(infor));
        this.userInfor = infor;
    }
}
