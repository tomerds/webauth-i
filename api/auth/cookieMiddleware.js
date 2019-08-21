const jwt = require('jsonwebtoken');

// module.exports = (req, res, next) => {
//   if (req.session && req.session.user) {
//     next();
//   } else {
//     res.status(401).json({ error: 'Invalid credentials' })
//   };
// };

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, 'this is a secret, should come from env file', (error, decodedToken) => {
      if (error) {
        res.status(401).json({ error: 'Not authorised!' })
      } else {
        req.decodedToken = decodedToken;
        next();
      }
    })
  } else {
    res.status(400).json({ error: 'No credentials provided' })
  }
};