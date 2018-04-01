let bookshelf = require('./db')
class Department extends bookshelf.model.Model {
  get tableName () {
    return 'TajibPC'
  }
  static all () {
    return this.forge().fetchAll()
  }
  static byDepartment(department) {
    return this.forge().query({where:{ 'TajibPC.department': department }}).fetchAll()
  }

  static byId(id) {
    return this.forge().query({where:{ 'TajibPC.id': id }}).fetchAll()
  }
}
module.exports = Department
