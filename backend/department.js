let bookshelf = require('./db')
class Department extends bookshelf.model.Model {
  get tableName () {
    return 's140302148'
  }
  static all () {
    return this.forge().fetchAll()
  }
  static byDepartment(department) {
    return this.forge().query({where:{ 's140302148.department': department }}).fetchAll()
  }
  static byId(id) {
    return this.forge().query({where:{ 's140302148.id': id }}).fetchAll()
  }
}
module.exports = Department
