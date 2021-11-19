/**
 */

module.exports = app => {
    return async (ctx, next) => {
        const { app, socket } = ctx;
        console.log('我每次返回', socket.data)
        await next();
    };
};