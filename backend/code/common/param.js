var param = {
    msg: {
        model: {
            login: {
                success: 'Tài khoản và mật khẩu chính xác',
                failed: 'Tài khoản hoặc mật khẩu không đúng',
                inexist: 'Tài khoản không tồn tại'
            },
            addRecord: {
                success: 'Tạo bản ghi thành công',
                failed: 'Tạo bản ghi thất bại'
            }
        },
        controller: {}
    },
    errorCode: {
        callAPI: {
            success: 0,
            failed: 1
        }
    }
};

module.exports = param;