const knex = require('knex');

const knexConfig = require('../knexFile');

module.exports = knex(knexConfig.development);
