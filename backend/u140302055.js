let bookshelf = require('./db')
class u140302055 extends bookshelf.model.Model {
  get tableName () {
    return 'u140302055'
  }
  static all () {
    return this.forge().fetchAll()
  }
  static byDepartment(department) {
    return this.forge().query({where:{ 'u140302055.Department': department }}).fetchAll()
  }

  static byId(id) {
    return this.forge().query({where:{ 'u140302055.Id': id }}).fetchAll()
  }
}
module.exports = u140302055
