let bookshelf = require('./db')
class Department extends bookshelf.model.Model {
  get tableName () {
    return 'db_130303008'
  }
  static all () {
    return this.forge().fetchAll()
  }
  static byDepartment(department) {
    return this.forge().query({where:{ 'db_130303008.department': department }}).fetchAll()
  }

  static byId(id) {
    return this.forge().query({where:{ 'db_130303008.id': id }}).fetchAll()
  }
}
module.exports = Department
