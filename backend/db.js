let connectionString = 'postgres://postgres:postgres@localhost:5432/CS416_DB'
let knex = require('knex')({
  client: 'pg',
  connection: connectionString,
  searchPath: 'knex,public',
  acquireConnectionTimeout: 10000000
})
exports.model = require('bookshelf')(knex)
