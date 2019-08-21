const db = require('../database/dbConfig');

module.exports = {
  find,
  add,
  findById,
  findBy,
}

function find() {
  return db('users2');
};

function add(user) {
  return db('users2')
    .insert(user, 'id')
    .then(ids => {
      const [id] = ids;
      return findById(id);
    })
};

function findById(id) {
  return db('users2').where('id', '=', id);
};

function findBy(type) {
  return db('users2').where(type);
}