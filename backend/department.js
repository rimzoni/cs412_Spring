let bookshelf = require('./db')
class Department extends bookshelf.model.Model {
  get tableName () {
    return '140302059'
  }
  static all () {
    return this.forge().fetchAll()
  }
  static byDepartment(department) {
    return this.forge().query({where:{ '140302059.department': department }}).fetchAll()
  }
}
module.exports = Department
