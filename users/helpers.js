const db = require('../database/dbConfig');

module.exports = {
  find,
  add,
  findById,
  findBy,
}

function find() {
  return db('users');
};

function add(user) {
  return db('users')
    .insert(user, 'id')
    .then(ids => {
      const [id] = ids;
      return findById(id);
    })
};

function findById(id) {
  return db('users').where({ id });
};

function findBy(type) {
  return db('users').where(type);
}