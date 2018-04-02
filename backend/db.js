let connectionString = 'postgres://iuslab:Ius2008@localhost:5432/cs416_db'
//let connectionString = 'postgres://postgres:password@localhost:5432/postgres'
let knex = require('knex')({
  client: 'pg',
  connection: connectionString,
  searchPath: 'knex,public',
  acquireConnectionTimeout: 10000000
})
exports.model = require('bookshelf')(knex)
