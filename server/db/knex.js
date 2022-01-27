const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: "db.sqlite3"
  },
  useNullAsDefault: true
});

const { attachPaginate } = require('knex-paginate');
attachPaginate();

module.exports = knex;