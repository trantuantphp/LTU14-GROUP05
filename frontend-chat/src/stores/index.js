import newsStore from './NewsStore';
import AuthStore from './AuthStore';
import ChatStore from './ChatStore';

export default {
    NewsStore: new newsStore(),
    AuthStore: new AuthStore(),
    ChatStore: new ChatStore(),
};
