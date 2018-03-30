let bookshelf = require('./db')
class department extends bookshelf.model.Model {
  get tableName () {
    return '992450'
  }
  static all () {
    return this.forge().fetchAll()
  }
  static bydepartment(department) {
    return this.forge().query({where:{ '992450.department': department }}).fetchAll()
  }
  static byId(id) {
    return this.forge().query({where:{ '992450.id': id }}).fetchAll()
}
}
module.exports = department
