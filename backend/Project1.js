let bookshelf = require('./db')
class Project1 extends bookshelf.model.Model {
  get tableName () {
    return '150302082'
  }
  static all () {
    return this.forge().fetchAll()
  }
  static byDepartment(department) {
    return this.forge().query({where:{ '150302082.department': department }}).fetchAll()
  }
}
module.exports = Project1
