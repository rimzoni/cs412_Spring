let bookshelf = require('./db')
class department extends bookshelf.model.Model 
{
  get tableName()
{
  return '140302102'
}
static all ()
{
  return this.forge().fetchAll()
}
static byDepartment(departmentName)
{
  return this.forge().query({where:{ '140302102.department' : departmentName}}).fetchAll()
}
}
module.exports=department


