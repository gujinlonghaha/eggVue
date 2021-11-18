"use strict";

const Controller = require("egg").Controller;
const path = require("path");
const fs = require("fs");

class TestController extends Controller {
  async index() {
    const { ctx } = this;
    const list = await ctx.service.add.get(ctx.query);
    ctx.body = ctx.helper.initData(list);
  }
  async create() {
    const { ctx } = this;
    const list = await ctx.service.add.post(ctx.request.body);
    ctx.body = ctx.helper.initData(list);
  }
  async start() {
    const { ctx,app } = this;
    app.schedules['F:\\study\\egg\\app\\schedule\\update_cache.js'].schedule.disable = false
    console.log('我是开启')
    console.log(app.schedules['F:\\study\\egg\\app\\schedule\\update_cache.js'].schedule.disable);
    // await app.runSchedule('update_cache');
    ctx.body = ctx.helper.initData("成功");
  }
  async stop() {
    const { ctx,app } = this;
    app.schedules['F:\\study\\egg\\app\\schedule\\update_cache.js'].schedule.disable = true
    console.log(app.schedules['F:\\study\\egg\\app\\schedule\\update_cache.js'].schedule.disable);
    console.log('我是关闭')
    ctx.body = ctx.helper.initData("成功");
  }
  async update() {
    const { ctx } = this;
    const list = await ctx.service.add.put(ctx.request.body);
    ctx.body = ctx.helper.initData(list);
  }
  async destroy() {
    const { ctx } = this;
    const list = await ctx.service.add.delete(ctx.request.body);
    ctx.body = ctx.helper.initData(list);
  }
  async postTest() {
    const { ctx } = this;
    // ctx.logger.warn(ctx.request.body); //有
    const list = await ctx.service.add.post(ctx.request.body);
    ctx.body = ctx.helper.initData(list);
  }
  async setToken() {
    const { ctx, app } = this;
    const token = app.jwt.sign(
      { username: "username", }, 
      app.config.jwt.secret
    );
    ctx.cookies.set( 'authorization', token ); 
    ctx.body = ctx.helper.initData(token);
  }
  async getToken() {
    const { ctx} = this;
    let token=ctx.cookies.get('authorization' ); 
    ctx.body = ctx.helper.initData(token);
  }
  async upload() {
    const { ctx } = this;
    console.log(ctx.request.body)
    ctx.logger.warn(ctx.request.files[0]); //有
    // const list = await ctx.service.add.post(ctx.request.body);
    let file = ctx.request.files[0];
    let filepath = fs.readFileSync(file.filepath); //files[0]表示获取第一个文件，若前端上传多个文件则可以遍历这个数组对象
    // 将文件存到指定位置  静态文件随机数和后缀
    let name = `${Math.ceil(Math.random() * 100)}${path.extname(
      file.filename
    )}`;
    fs.writeFileSync(path.resolve(this.app.config.static.dir, name), filepath);
    ctx.body = { name };
  }
  // 下载本地文件
  async download() {
    const filePath = path.resolve(this.app.config.static.dir, "gjl.txt");
    this.ctx.attachment("gjl.txt");
    this.ctx.set("Content-Type", "application/octet-stream");
    this.ctx.body = fs.createReadStream(filePath);
  }
  //  下载远端图片
  async downloadImage() {
    const url = "http://cdn2.ettoday.net/images/1200/1200526.jpg";
    const res = await this.ctx.curl(url, {
      streaming: true,
    });

    this.ctx.type = "jpg";
    this.ctx.body = res.res;
  }
}
module.exports = TestController;
