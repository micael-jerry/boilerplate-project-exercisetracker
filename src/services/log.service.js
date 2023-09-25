const { findAllExercises } = require("./exercise.service");
const { findUserById } = require("./user.service");

const logMapperToRest = (exercise) => {
    return {
        description: exercise.description,
        duration: exercise.duration,
        date: exercise.date,
    }
}

const findAllLogs = async (userId, from, to, limit) => {
    let user = await findUserById(userId);
    let exercises = await findAllExercises(userId, from, to, limit);
    return {
        _id: user._id,
        username: user.username,
        count: exercises.length,
        log: exercises.map(logMapperToRest)
    }
}

module.exports.findAllLogs = findAllLogs;