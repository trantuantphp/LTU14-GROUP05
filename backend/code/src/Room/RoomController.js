var Room = require('./RoomModel');
const { method } = Room;

var RoomController = {
    getListMember: async req => {
        let data = await method.getListMember(req);
        return data;
    }
}

module.exports = RoomController;