let bookshelf = require('./db')
class Model150302007 extends bookshelf.model.Model {
	get tableName () {
		return '150302007'
	}
	static all () {
		return this.forge().fetchAll()
	}
	static byDepartment(department) {
		return this.forge().query({ where: { 'department': department } }).fetchAll()
	}
}
module.exports = Model150302007
