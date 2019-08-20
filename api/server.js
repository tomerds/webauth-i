const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const session = require('express-session');

const authRouter = require('../auth/authRouter');
const userRouter = require('../users/userRouter');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

const sessionConfig = {
  name: 'cookieMonster',
  secret: 'shhhhh',
  cookie: {
    maxAge: 1 * 24 * 60 * 60 * 1000,
    secure: false, //change to true for production, can put in env variable
    httpOnly: true,
    resave: false, // 
    saveUninitialized: false, // GDPR 
  }

}

server.use('/api/auth', authRouter);
server.use('/api/user', userRouter);
server.use(session(sessionConfig));

module.exports = server;