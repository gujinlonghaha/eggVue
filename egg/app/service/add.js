const Service = require('egg').Service;

class addService extends Service {
  async get(query={}) {
    // 假如 我们拿到用户 id 从数据库获取用户详细信息
    let {name='', address='',id='',remark='',age='',}=query
    let results=[]
    if(name){
       results = await this.app.mysql.select('news', { // 搜索 post 表
        where: { name }, // WHERE 条件
        columns: ['name', 'address','id','remark','age'], // 要查询的表字段
        orders: [['id','desc']], // 排序方式
        limit: 10, // 返回数据量
        offset: 0, // 数据偏移量
      });
    }else{
       results = await this.app.mysql.select('news');
    }
    return results;
  }
  async put(body={}) {
    let {name='', address='',id='',remark='',age='',}=body
    const results = await this.app.mysql.update('news', body);
    return results;
  }
  async post(body={}) {
    let {name='', address='',id='',remark='',age='',}=body
    const results = await this.app.mysql.insert('news', body);
    return results;
  }
  async delete(body={}) {
    // 假如 我们拿到用户 id 从数据库获取用户详细信息
    let {name='', address='',id='',remark='',age='',}=body
    const results = await this.app.mysql.delete('news', {
      id,
    });;
    return results;
  }
}

module.exports = addService;