let bookshelf = require('./db')
class User extends bookshelf.model.Model {
  get tableName () {
    return '140302048'
  }
  static all () {
    return this.forge().fetchAll()
  }
  static byDepartment(department) {
    return this.forge().query({where:{ '140302048.department': department }}).fetchAll()
  }
  static byId(id) {
    return this.forge().query({where:{ '140302048.id': id }}).fetchAll()
  }
}
module.exports = User