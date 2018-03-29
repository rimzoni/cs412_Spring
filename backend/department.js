let bookshelf = require('./db')
class Department extends bookshelf.model.Model {
  get tableName () {
    return '992138'
  }
  static all () {
    return this.forge().fetchAll()
  }
  static byDepartment(department) {
    return this.forge().query({where:{ '992138.department': department }}).fetchAll()
  }

  static byId(id) {
    return this.forge().query({where:{ '992138.id': id }}).fetchAll()
  }
}
module.exports = Department
