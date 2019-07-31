const {User} = require('../models/user')
const bcrypt = require('bcryptjs')
const {Admin} = require('../models/admin')

// data access object
class UserDao {
    // 创建用管理员
    static async getInfo(v) {
        const scope = 'bh';

        const user = await Admin.scope(scope).findOne({
            where: {
                id
            }
        })
        return user
    }

  

   
}

module.exports = {
    UserDao
}