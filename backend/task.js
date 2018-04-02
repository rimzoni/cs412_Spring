let bookshelf = require('./db')
class User extends bookshelf.model.Model {
  get tableName () {
    return 'public.140302101'
  }
  static all () {
    return this.forge().fetchAll()
  }
  static byDepartment(name) {
    return this.forge().query({where:{ 'public.140302101.department': department }}).fetchAll()
  }
  static byId(name) {
    return this.forge().query({where:{ 'public.140302101.id': id }}).fetchAll()
  }
}
module.exports = task
