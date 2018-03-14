let bookshelf = require('./db')
class User extends bookshelf.model.Model {
  get tableName () {
    return 'User'
  }
  static all () {
    return this.forge().fetchAll()
  }
  static byName(name) {
    return this.forge().query({where:{ 'User.name': name }}).fetchAll()
<<<<<<< HEAD
  }
  static byEmail(email) {
    return this.forge().query({where:{ 'User.email': email }}).fetchAll()
=======
>>>>>>> master
  }
}
module.exports = User
