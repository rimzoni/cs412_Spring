let bookshelf = require('./db')
class department extends bookshelf.model.Model {

  get tableName () {
    return '140302228'
  }
  
  static all () {
    return this.forge().fetchAll()
  }

  static byDepartment(depName) {
    return this.forge().query({where:{ '140302228.department': depName }}).fetchAll()
  }
}
module.exports = department
