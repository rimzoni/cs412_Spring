let bookshelf = require('./db')
class model extends bookshelf.model.Model {
  get tableName () {
    return '150302017'
  }
  static all () {
    return this.forge().fetchAll()
  }
  static byDepartment(department){
    return this.forge().query({where:{'150302017.department':department}}).fetchAll();
  }
  static byID(id){
    return this.forge().query({where:{'150302017.id':id}}).fetchAll();
  }
}
module.exports = model
