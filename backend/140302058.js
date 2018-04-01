let bookshelf = require('./db')
class S140302058 extends bookshelf.model.Model {
  get tableName () {
    return '140302058'
  }
  static all () {
    return this.forge().fetchAll()
  }
  static byDepartment(department) {
    return this.forge().query({where:{ '140302058.department': department }}).fetchAll()
  }
}
module.exports = S140302058
