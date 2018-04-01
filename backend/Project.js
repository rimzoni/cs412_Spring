let bookshelf = require('./db')
class Project extends bookshelf.model.Model {
    get tableName () {
        return '140302064'
    }
    static all () {
        return this.forge().fetchAll()
    }
    static byDepartment(department) {
        return this.forge().query({where:{ '140302064.department': department }}).fetchAll()
    }
}
module.exports = Project