import { observable } from 'mobx';

class AuthStore {
    @observable login = true;
}

export default AuthStore;