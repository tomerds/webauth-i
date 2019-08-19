const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bcrypt = require('bcryptjs');
const db = require('./database/dbConfig');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
  res.send('hello world');
})

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`running on port ${port}`));