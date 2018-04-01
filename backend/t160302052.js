let bookshelf = require('./db')
class t160302052 extends bookshelf.model.Model {
  get tableName () {
    return 't160302052'
  }
  static all () {
    return this.forge().fetchAll()
  }
  static byDepartment(department) {
    return this.forge().query({where:{ 't160302052.Department': department }}).fetchAll()
  }
  static byId(id) {
    return this.forge().query({where:{ 't160302052.Id': id }}).fetchAll()
  }
}
module.exports = t160302052
