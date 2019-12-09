import newsStore from './NewsStore';
import AuthStore from './AuthStore';

export default {
    NewsStore: new newsStore(),
    AuthStore: new AuthStore()
};
