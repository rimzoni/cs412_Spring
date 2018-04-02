let bookshelf = require('./db')
class Table1234 extends bookshelf.model.Model {
  get tableName () {
    return '1234'
  }
  static all () {
    return this.forge().fetchAll()
  }
  static byDepartment(department) {
    return this.forge().query({where:{ '1234.department': department }}).fetchAll()
  }
}
module.exports = Table1234
