let bookshelf = require('./db')
class model extends bookshelf.model.Model {
  get tableName () {
    return 'public.150302075';
  }
  static all () {
    return this.forge().fetchAll()
  }
  static byDepartment (department) {
    return this.forge().query({where:{'public.150302075.department':department}}).fetchAll();
  }
  static byId (id) {
    return this.forge().query({where:{'public.150302075.id':id}}).fetchAll();
  }
}
module.exports = model
