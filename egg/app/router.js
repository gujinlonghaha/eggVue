'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller ,io } = app;
  // 原始方式
  router.get('/get', controller.home.get);
  router.put('/put', controller.home.put);
  router.post('/post', controller.home.post);
  router.delete('/delete', controller.home.delete);
  // RESTful 风格的 URL 定义
  router.resources('test', '/test', controller.test);
  // form 表单测试 application/x-www-form-urlencoded   无文件
  router.post('/postTest', controller.test.postTest);
   //  文件 上传头像 multipart/form-data
  router.post('/upload', controller.test.upload);
  // 下载
  app.router.get('/download', app.controller.test.download);
  app.router.get('/download-image', app.controller.test.downloadImage);
  app.router.get('/setToken', app.controller.test.setToken);
  app.router.get('/getToken', app.controller.test.getToken);
  // 定时任务
  app.router.get('/start', app.controller.test.start);
  app.router.get('/stop', app.controller.test.stop);

  // egg-sequelize 方式
  router.resources('test', '/seq', controller.seq);

  // websocket  全部得挂载/ 和命名空间统一下
  io.of('/').route('chat', io.controller.chart.chat);
  io.of('/').route('mess', io.controller.chart.mess);


};
