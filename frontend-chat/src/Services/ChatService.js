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
    },
    sendMess: async (type, value, sender_id, receiver_id, receiver_type) => {
        const body = {
            type,
            value,
            sender_id,
            receiver_id,
            receiver_type
        };
        const res = await Request.postWithParam(api.sendMessage, body);
        if (res) {
            return res;
        }
    },
    createRoom: async (name, id) => {
        const body = {
            name,
            creator_id: id
        };
        const res = await Request.postWithParam(api.createRoom, body);
        if (res) {
            return res;
        }
    },
    addMember: async (roomId, userId) => {
        const body = {
            room_id: roomId,
            user_id: userId
        };
        const res = await Request.postWithParam(api.addMember, body);
        return res;
    },
    getListMess: async (senderId, receivedId, receiver_type) => {
        const body = {
            sender_id: senderId,
            receiver_id: receivedId,
            receiver_type: receiver_type
        };
        const res = await Request.postWithParam(api.listMess, body);
        return res;
    }
};