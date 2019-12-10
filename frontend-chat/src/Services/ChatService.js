import { Request } from '../const/Request';
import { api } from '../const/api';

export const ChatService = {
    getAllUser: async () => {
        const res = await Request.postWithParam(api.getAllUser);
        if (res) {
            return res;
        }
    },
    getListRoom: async (idUser) => {
        const body = {
            id: idUser
        };
        const res = await Request.postWithParam(api.getListRoom, body);
        if (res) {
            return res;
        }
    },
    getUserDetail: async (idUser) => {
        const body = {
            id: idUser
        };
        const res = await Request.postWithParam(api.getUserDetail, body);
        if (res) {
            return res;
        }
    },
    getListMember: async (idRoom) => {
        const body = {
            id: idRoom
        };
        const res = await Request.postWithParam(api.getListMember, body);
        if (res) {
            return res;
        }
    }
};