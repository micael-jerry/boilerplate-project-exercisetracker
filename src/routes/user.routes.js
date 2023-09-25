const express = require('express');
const { getUsers, getUserById, postUser } = require('../controllers/user.controller');
const userRouter = express.Router();

userRouter.get('/', getUsers);
userRouter.get('/:userId', getUserById);
userRouter.post('/', postUser);

module.exports = userRouter;