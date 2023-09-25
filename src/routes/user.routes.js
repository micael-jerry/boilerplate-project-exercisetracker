const express = require('express');
const { getUsers, getUserById, postUser } = require('../controllers/user.controller');
const routerUser = express.Router();

routerUser.get('/', getUsers);
routerUser.get('/:userId', getUserById);
routerUser.post('/', postUser);

module.exports = routerUser;