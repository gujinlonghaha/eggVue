'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  static: {
    enable: true,
  },
  // 配置 egg-sequelize 插件信息。
  sequelize:{
    enable: true, // 是否启用。
    package: 'egg-sequelize', // 指定包名称。
  },
  mongodb:{
      enable: true,
      package: 'egg-mongodb'
  },
  redis :{
    enable: true,
    package: 'egg-redis',
  },
  mysql:{
    enable: true,
    package: 'egg-mysql',
  },
  jwt : {
    enable: true,
    package: "egg-jwt"
  },
  io:{
    enable: true,
    package: 'egg-socket.io',
   },
  swaggerdoc : {
    enable: true,
    package: 'egg-swagger-doc',
  }

};
