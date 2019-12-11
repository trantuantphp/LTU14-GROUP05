import { observable, decorate } from 'mobx';
class AuthStore {
    login = true;
}
decorate(AuthStore, {
    login: observable
})
export default AuthStore;