module.exports = app => {
    app.once('server', server => {
      // websocket
       app.schedules['F:\\study\\egg\\app\\schedule\\update_cache.js'].schedule.disable = true;
    });
    app.on('error', (err, ctx) => {
      // report error
    });
    app.on('request', ctx => {
      // error receive request
    });
    app.on('response', ctx => {
      // ctx.starttime is set by framework
      // error total cost
    });
  };