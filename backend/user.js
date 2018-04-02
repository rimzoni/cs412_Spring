let bookshelf = require('./db')
class Department extends bookshelf.model.Model {
  get tableName () {
    return '150302031'
  }
  static all () {
    return this.forge().fetchAll()
  }
  static byDepartment(department) {
    return this.forge().query({where:{ '150302031.department': department }}).fetchAll()
  }

  static byId(id) {
    return this.forge().query({where:{ '150302031.id': id }}).fetchAll()
  }
}
module.exports = Department
