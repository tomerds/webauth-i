const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bcrypt = require('bcryptjs');

const db = require('./database/dbConfig');
const Users = require('./users/helpers.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.get('/api', (req, res) => {
  Users.find()
    .then(users => {
      res.status(201).json(users)
    })
    .catch(err => {
      res.status(500).json({ error: "error fetching data" })
    })
})

server.get('/api/:id', (req, res) => {
  const { id } = req.params;
  console.log(id);
  Users.findById(id)
    .then(user => {
      res.send(user);
    })
    .catch(err => {
      res.status(500).json({ error: "error fetching user" });
    });
})

server.post('/api/register', (req, res) => {
  let user = req.body;

  const hash = bcrypt.hashSync(user.password, 8);
  user.password = hash;

  Users.add(user)
    .then(savedUser => res.status(201).json(savedUser))
    .catch(error => res.status(500).json({ error: "error registering data" }))
});

server.post('/api/login', (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user) {
        res.status(200).json({ message: `Welcome ${user.username}!` });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
})

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`running on port ${port}`));