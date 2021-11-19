/**
 */

module.exports = app => {
    return async (ctx, next) => {
        const { app, socket } = ctx;
        console.log('我是socket开始')
        await next();
    };
};