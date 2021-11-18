"use strict";

const Controller = require("egg").Controller;
/**
 * @Controller home
 */

class HomeController extends Controller {
    /**
   * @router get /get  路径
   * @summary 查询用户数组
   * @description 接口的描述信息
   * @request query string name 对参数name的描述
   * @response 200 indexJsonBody
   */
  async get() {
    const { ctx } = this;
    ctx.logger.warn('get');
    ctx.logger.warn(ctx.query); //有
    ctx.logger.warn(ctx.request.body); //无
    const list = await ctx.service.add.get(ctx.query);
    ctx.body = list;
  }
  async put() {
    const { ctx } = this;
    ctx.logger.warn('put');
    ctx.logger.warn(ctx.query); //有
    ctx.logger.warn(ctx.request.body); //有
    const list = await ctx.service.add.put(ctx.request.body);
    ctx.body = list;
  }
     /**
   * @router post /post  路径
   * @summary 新增用户
   * @description 新增用户
   * @request body string name 对参数name的描述
   * @response 200 indexJsonBody
   */
  async post() {
    const { ctx } = this;
    ctx.logger.warn('post');
    ctx.logger.warn(ctx.query); //有
    ctx.logger.warn(ctx.request.body); //有
    const list = await ctx.service.add.post(ctx.request.body);
    ctx.body = list;
  }
  async delete() {
    const { ctx } = this;
    ctx.logger.warn('delete'); 
    ctx.logger.warn(ctx.query); //有
    ctx.logger.warn(ctx.request.body); //有
    const list = await ctx.service.add.delete(ctx.request.body);
    ctx.body = list;
  }
 
}

module.exports = HomeController;
