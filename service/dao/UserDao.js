let BaseDao = require('./BaseDao');
// 导入对应的实体
let User = require('../models/user');

class UserDao extends BaseDao{
  constructor() {
    super(User);
  }
  //如果有啥特殊需求的话，自己再重写方法咯
    /**
   * 查询所有符合条件 docs
   *
   * @param condition 查找条件
   * @param constraints 查找配置
   * @returns {Promise}
   */
  async findAll(condition, constraints) {
    try {
      let data = await User.find(condition, constraints ? constraints : null);
      return data;
    } catch (error) {
      console.log('findAll error--> ', error);
      return error;
    }
  }
}

module.exports = UserDao;