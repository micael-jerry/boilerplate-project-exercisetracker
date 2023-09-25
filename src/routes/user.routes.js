const express = require('express');
const { getUsers, getUserById, postUser } = require('../controllers/user.controller');
const { getExercise, postExercise } = require('../controllers/exercise.controller');
const userRouter = express.Router();

// USER
userRouter.get('/', getUsers);
userRouter.get('/:userId', getUserById);
userRouter.post('/', postUser);

// USER EXERCISE
userRouter.get('/:userId/exercises', getExercise);
userRouter.post('/:userId/exercises', postExercise);

module.exports = userRouter;