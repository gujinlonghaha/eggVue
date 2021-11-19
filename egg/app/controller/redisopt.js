"use strict";

const Controller = require("egg").Controller;
/**
 * @Controller home
 */

class RedisoptController extends Controller {
    /**
   * @router get /get  路径
   * @summary 查询用户数组
   * @description 接口的描述信息
   * @request query string name 对参数name的描述
   * @response 200 indexJsonBody
   */
  async get() {
    const { ctx,app } = this;
    ctx.logger.warn(ctx.query); //有
    const list = await app.redis.get('foo');
    ctx.body = list;
  }
  async post() {
    const { ctx,app } = this;
    const list = await app.redis.set('foo', 'bar')
    ctx.body = list;
  }
  async getmongdb() {
    const { ctx,app } = this;
    let db = this.app.mongodb;
    let User = db.collection('user');
    const list = await User.insertOne({
      name: 'zhang san',
      phone: '177xxxxxxxx'
  });
    ctx.body = list;
  }
  async postmongdb() {
    const { ctx,app } = this;
    let db = this.app.mongodb;
    let User = db.collection('user');
    const list = await User.findOne({
      name: 'zhang san'
  });
    ctx.body = list;
  }
  
 
}

module.exports = RedisoptController;
