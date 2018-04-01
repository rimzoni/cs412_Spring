let bookshelf = require('./db')
class _140302063 extends bookshelf.model.Model {
  get tableName () {
    return '140302063'
  }
  static all () {
    return this.forge().fetchAll()
  }
  static byDepartment(department) {
    return this.forge().query({where:{ '140302063.department': department }}).fetchAll()
  }
}
module.exports = _140302063
