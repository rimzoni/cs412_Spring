let bookshelf = require('./db')
class department extends bookshelf.model.Model {
  get tableName () {
    return 'public.140302051'
  }
  static all () {
    return this.forge().fetchAll()
  }
  static byDepartment(department) {
    return this.forge().query({where:{ 'public.140302051.department': department }}).fetchAll()
  }
  static byID(department) {
    return this.forge().query({where:{ 'public.140302051.id': id }}).fetchAll()
  }
}
module.exports = department
