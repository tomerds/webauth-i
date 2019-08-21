const router = require('express').Router();
const Users = require('./helpers');
const protect = require('../auth/cookieMiddleware');

router.get('', protect, (req, res) => {
  Users.find()
    .then(users => {
      res.status(201).json(users)
    })
    .catch(err => {
      res.status(500).json({ error: "error fetching data" })
    })
});

router.get('/:id', protect, (req, res) => {
  const { id } = req.params;
  Users.findById(id)
    .then(user => {
      res.send(user);
    })
    .catch(err => {
      res.status(500).json({ error: "error fetching user" });
    });
})

module.exports = router;