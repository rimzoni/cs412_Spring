let bookshelf = require('./db')
class Cars extends bookshelf.model.Model {
  get tableName () {
    return 'Cars'
  }
  static all () {
    return this.forge().fetchAll()
  }
  static byID(id) {
    return this.forge().query({where:{ 'ID': id }}).fetch()
  }
  static byModel(status) {
    return this.forge().query({where:{ 'Model': model }}).fetchAll()
  }
  static byColor(userId) {
    return this.forge().query({where:{ 'Color': color }}).fetchAll()
  }
}
module.exports = Cars
