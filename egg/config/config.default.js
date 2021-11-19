/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1636531593469_2587";

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.multipart = {
    mode: "file",
  };
  // {app_root}/config/config.default.js
  config.swaggerdoc = {
    dirScanner: "./app/controller",
    apiInfo: {
      title: "egg-swagger",
      description: "swagger-ui for egg",
      version: "1.0.0",
    },
    schemes: ["http", "https"],
    consumes: ["application/json"],
    produces: ["application/json"],
    securityDefinitions: {
      // apikey: {
      //   type: 'apiKey',
      //   name: 'clientkey',
      //   in: 'header',
      // },
      // oauth2: {
      //   type: 'oauth2',
      //   tokenUrl: 'http://petstore.swagger.io/oauth/dialog',
      //   flow: 'password',
      //   scopes: {
      //     'write:access_token': 'write access_token',
      //     'read:access_token': 'read access_token',
      //   },
      // },
    },
    enableSecurity: false,
    // enableValidate: true,
    routerMap: false,
    enable: true,
  };

  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    // 允许访问接口的白名单
    domainWhiteList: ["*"], // ['http://localhost:8080']
  };
  config.redis = {
    client: {
      port: 6379,          // Redis port
      host: '127.0.0.1',   // Redis host
      password: null, // 默认没密码
      db: 0, // 创建库默认为0
    },
  },
  config.mongodb = {
        app: true,
        agent: false,
        username: '',
        password: '',
        hosts: '127.0.0.1:27017',
        db: 'test',
        query: '',
    }
   //配置session      session的配置和cookie基本是一样的，可以使用cookie里面的配置
   config.session={
        key:'SESSION_ID',   //设置session cookie里面的key
        maxAge:30*1000*60,
        encrypt:true,
        renew:true   //renew等于true  那么每次刷新页面的时候 session都会被延期
    }

  config.middleware = ["errorHandler"];
  // 统一错误信息配置（注：match和ignore不可以同时配置）
  config.errorHandler = {
    enable: true, // 中间件开启配置
    // match: '', // 设置请求中间件的请求路由
    // ignore: '', // 设置不经过这个中间件的请求路由
  };
  // 数据库配置信息。
  exports.sequelize = {
    dialect: "mysql", // 数据库类型，支持 mysql，sqlite,mssql,pgsql,oracle。
    host: "127.0.0.1", // 数据库服务器地址。
    port: 3306, // 数据库连接端口号。
    database: "sys", // 数据库名称。
    username: "root", // 数据库登录用户名。
    password: "123456", // 数据库登录密码。
    define: {
      freezeTableName: true, // Model 对应的表名将与model名相同。
      timestamps: false, // 默认情况下，Sequelize会将createdAt和updatedAt的属性添加到模型中，以便您可以知道数据库条目何时进入数据库以及何时被更新
    },
    app: true,
  };
  
  exports.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: "127.0.0.1",
      // 端口号
      port: "3306",
      // 用户名
      user: "root",
      // 密码
      password: "123456",
      // 数据库名
      database: "sys",
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };
  exports.jwt = {
    secret: "123456",
  };
  exports.io = {
    init: {},
    namespace: {
      '/': {  //对应router.js里的 of('/')
        connectionMiddleware: ['auth'], //对应io/middleware/auth
        packetMiddleware: ['back'], //对应io/middleware/back
      },
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
