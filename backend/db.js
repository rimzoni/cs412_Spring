let connectionString = 'postgres://cs412_user:6303@localhost:5432/cs412_db'
let knex = require('knex')({
  client: 'pg',
  connection: connectionString,
  searchPath: 'knex,public',
  acquireConnectionTimeout: 10000000
})
exports.model = require('bookshelf')(knex)
