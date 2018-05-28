let bookshelf = require('./db')
let Task = require('./task')

const User = bookshelf.model.Model.extend({
  tableName: 'UsersMirnes',
  tasks: function(){
    return this.hasMany(Task, ['userId']);
},
}, {
  byId: function (id) {
    return this.forge().query({where:{ 'id': id }}).fetch({withRelated: [ 'tasks']})
  },
  all:  function() {
    return this.forge().fetchAll({withRelated: [ 'tasks']})
  },
  byName: function (name) {
    return this.forge().query({where:{ 'UsersMirnes.name': name }}).fetchAll({withRelated: [ 'tasks']})
  }
}
)

module.exports = User
