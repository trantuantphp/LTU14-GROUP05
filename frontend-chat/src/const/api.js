const prefixUser = '/user';
const prefixRoom = '/room';

export const api = {
    login: `${prefixUser}/login`,
    register: `${prefixUser}/add`,
    getAllUser: `${prefixUser}/`,
    getListRoom: `${prefixUser}/room`,
    getUserDetail: `${prefixUser}/detail`,
    getListMember:`${prefixRoom}/`,
};