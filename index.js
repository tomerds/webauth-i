const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bcrypt = require('bcryptjs');
const session = require('express-session');

const db = require('./database/dbConfig');
const Users = require('./users/helpers.js');

const authRouter = require('./auth/authRouter');
const userRouter = require('./users/userRouter');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/user', userRouter);


const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`running on port ${port}`));