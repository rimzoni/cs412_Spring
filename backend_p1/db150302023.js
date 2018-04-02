let bookshelf = require('./db_p1')
class db150302023 extends bookshelf.model.Model {
  get tableName () {
    return 'db150302023'
  }
  static all () {
    return this.forge().fetchAll()
  }
  static byDepartment(department) {
    return this.forge().query({where:{ 'db150302023.department': department }}).fetchAll()
  }
}
module.exports = db150302023
