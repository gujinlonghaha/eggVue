
"use strict";

const Controller = require("egg").Controller;
class ChartController extends Controller {
   async chat() {
      const { ctx, app } = this;
       //方法通过 客户端  socket.emit("chat", {a:'我地址chat是测试信息'});
      const params = this.ctx.args;
      console.log('客户端消息', params);
      this.ctx.socket.emit('chat', params);
   }
   async mess() { 
      //方法通过 客户端  socket.emit("mess", {a:'我地址chat是测试信息'});
      const params = this.ctx.args;
      console.log('客户端消息', params);
      this.ctx.socket.emit('message', params);
   }
}



module.exports = ChartController;
