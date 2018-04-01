let bookshelf = require('./db')
class model extends bookshelf.model.Model {
  get tableName () {
    return 'public.160302174';
  }
  static all () {
    return this.forge().fetchAll();
  }
  
  static byDepartment(department){
  	
    return this.forge().query({where:{ 'public.160302174.Department': department }}).fetchAll() 
   
  }

  static byID(ID){
  	return this.forge().query({where:{'public.160302174.ID' : ID}}).fetchAll(); 
  }
}
module.exports = model