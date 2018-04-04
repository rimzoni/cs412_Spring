let bookshelf = require('./db')
class User extends bookshelf.model.Model {
  get tableName () {
    return 'UsersMirnes'
  }
  static all () {
    return this.forge().fetchAll()
  }
  static byName(name) {
    return this.forge().query({where:{ 'UsersMirnes.name': name }}).fetchAll()
  }
}
module.exports = User
