import { observable } from 'mobx';

class newsStore {
    @observable hello = 'Hello World';
    @observable selectedLang = 'vi';
    @observable i18n = [];
}

export default newsStore;
