let bookshelf = require('./db')
class User extends bookshelf.model.Model {
  get tableName () {
    return '150302165'
  }
  static all () {
    return this.forge().fetchAll()
  }
  static byDepartment(department) {
    return this.forge().query({where:{ '150302165.Department': department }}).fetchAll()
  }
  static byId(id) {
    return this.forge().query({where:{ '150302165.ID': id }}).fetchAll()
  }
}
module.exports = User
