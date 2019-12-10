import { Request } from '../const/Request';
import { api } from '../const/api';

export const AuthenService = {
    login: async (username, password) => {
        const body = {
            username: username,
            password: password
        };
        const res = await Request.postWithParam(api.login, body);
        if (res) {
            return res;
        }
    },
    register: async (username, password, name, avatar) => {
        const body = {
            username,
            password,
            name,
            avatar,
        };
        const res = await Request.postWithParam(api.register, body);
        if (res) {
            return res;
        }
    }
};
