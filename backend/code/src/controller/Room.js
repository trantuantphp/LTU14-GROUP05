const models = require('../models');
const { Room, User, RoomMember } = models;

module.exports = {
    getListMember: async req => {
        const { id } = req.body;
        let data = await Room.findAll({
            where: {
                id: id
            },
            include: [
                {
                    as: 'members',
                    model: User
                }
            ]
        });
        return data;
    },
    createRoom: async req => {
        const { name, creator_id } = req.body;
        let data = await Room.create({
            name: name
        });
        let creator = await RoomMember.create({
            room_id: data.id,
            member_id: creator_id,
            role: 0
        });
        return {
            errorCode: 0,
            msg: 'Tạo room thành công',
            data: {
                room_id: creator.room_id,
                creator_id: creator.member_id,
                role: creator.role
            }
        };
    },
    addMember: async req => {
        const { room_id, user_id } = req.body;
        let data = await RoomMember.findOne({
            where: {
                room_id: room_id,
                member_id: user_id
            }
        });
        if (!data) {
            let member = await RoomMember.create({
                room_id: room_id,
                member_id: user_id,
                role: 1
            });
            return {
                errorCode: 0,
                msg: 'Thêm thành công',
                data: member
            };
        } else {
            let { status } = data;
            if (status == 1) {
                return {
                    errorCode: 1,
                    msg: 'Người dùng đã tồn tại'
                };
            } else if (status == 0) {
                let member = await RoomMember.update(
                    {
                        status: 1
                    },
                    {
                        where: {
                            room_id: room_id,
                            member_id: user_id
                        },
                    }
                );
                return {
                    errorCode: 0,
                    msg: 'Thêm thành công',
                    data: member
                };
            }
        }
    }
};
