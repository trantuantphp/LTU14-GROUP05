import { Request } from '../const/Request';
import { api } from '../const/api';

export const AuthenService = {
    login: async (username, password) => {
        const body = {
            username: username,
            password: password
        };
        return await Request.postWithParam(api.login, body);
    }
};
