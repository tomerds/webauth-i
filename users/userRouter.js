const router = require('express').Router();

router.get('/', (req, res) => {
  Users.find()
    .then(users => {
      res.status(201).json(users)
    })
    .catch(err => {
      res.status(500).json({ error: "error fetching data" })
    })
});

server.get('/:id', (req, res) => {
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