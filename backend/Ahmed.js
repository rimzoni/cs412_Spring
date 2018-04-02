let bookshelf = require('./db')
class Ahmed extends bookshelf.model.Model {
    get tableName () {
        return '140302067'
    }
    static all () {
        return this.forge().fetchAll()
    }
    static byDepartment(Department) {
        return this.forge().query({where:{ '140302067.Department': Department }}).fetchAll()
    }
}
module.exports = Ahmed
