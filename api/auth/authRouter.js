const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('../users/helpers');

//api/auth/...

router.post('/register', (req, res) => {
  let user = req.body;

  const hash = bcrypt.hashSync(user.password, 8);
  user.password = hash;

  Users.add(user)
    .then(savedUser => res.status(201).json(savedUser))
    .catch(error => res.status(500).json({ error: "error registering data" }))
});

function makeTokenFromUser(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    roles: ['student'],
  }
  const options = {
    expiresIn: '1h'
  }
  const token = jwt.sign(payload, 'this is a secret, should come from env file', options)
  return token;
}

router.post('/login', (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {

        const token = makeTokenFromUser(user);
        res.status(200).json({ message: `Welcome ${user.username}!`, token });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json({ error: 'Error somewhere' });
    });
});

router.get('/logout', (req, res) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        res.send('error logging out');
      }
      else {
        res.send('see ya');
      };
    });
  };
});

module.exports = router;