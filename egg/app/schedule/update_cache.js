const Subscription = require("egg").Subscription;

let obj = {
  interval: "2s", // 1 分钟间隔
  type: "worker", // 指定所有的 worker 都需要执行
 disable:true
};
class UpdateCache extends Subscription {
  // 通过 schedule 属性来设置定时任务的执行间隔等配置
  static get schedule() {
    return {
        interval: "3s", // 1 分钟间隔
        type: "worker", // 指定所有的 worker 都需要执行
        // type: "worker", // 指定所有的 worker 都需要执行
        // disable:true
        // 定时任务最好默认开启  否则启动只是执行一次 可以在任务中加判断（任务一直执行 逻辑不一定要执行）
        // 默认开启的话 可以通过id 开启(也要执行 await app.runSchedule('update_cache'); 否则失效 )和关闭
        //1 自己也可以写定时器 数组   然后清除定时器 2可以查库字段每次判断 或者缓存(缓存关闭会消失)
    };
  }

  // subscribe 是真正定时任务执行时被运行的函数
  async subscribe() {
    const { ctx } = this;
    console.log('运行了')
    const list = await ctx.service.add.post({ name: Math.ceil(Math.random() * 100 )});
  }
}

module.exports = UpdateCache;
