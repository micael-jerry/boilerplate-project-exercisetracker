const { ExerciseModel } = require("../models/exercise.model");
const { findUserById } = require("./user.service");

const exerciseMapperToRest = (user, exercise) => {
    let exo = { ...exercise._doc, username: user.username };
    exo['_id'] = exo.userId;
    delete exo.userId;
    delete exo.__v;
    exo['date'] = exo.date.toDateString();
    return exo;
}

const saveExercise = async (userId, exercise) => {
    let user = await findUserById(userId);
    const exerciseModel = ExerciseModel({
        userId: user._id,
        description: exercise.description,
        duration: exercise.duration,
        date: exercise.date
    });
    const exerciseSaved = await exerciseModel.save();
    return exerciseMapperToRest(user, exerciseSaved);
}

const findAllExercises = async (userId, from, to, limit) => {
    let user = await findUserById(userId);
    let exercises = await ExerciseModel.find({
        userId: userId,
        date: {
            $gte: from,
            $lte: to
        }
    }).limit(limit)

    return exercises.map((e) => exerciseMapperToRest(user, e));
}

module.exports.saveExercise = saveExercise;
module.exports.findAllExercises = findAllExercises;