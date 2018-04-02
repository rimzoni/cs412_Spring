let connectionString = {host: 'localhost',
    port: 5432,
    database: 'cs412',
    user: 'postgres',
    password: 'admin'}
let knex = require('knex')({
  client: 'pg',
  connection: connectionString,
  searchPath: 'knex,public',
  acquireConnectionTimeout: 10000000
})
exports.model = require('bookshelf')(knex)
