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
  static byModel(model) {
    return this.forge().query({where:{ 'Model': model }}).fetchAll()
}
module.exports = Cars
