import { observable, decorate, action } from 'mobx';
import Func from 'helpers/function';

class UserStore {
    list_user = [];

    async getListUser() {
        let json = {
            url: '/user',
            body: {}
        };
        let data = await Func.callApi(json);
        this.list_user = data.data.data
        return 1;
    }
}
decorate(UserStore, {
    list_user: observable,
    getListUser: action
});
export default UserStore;