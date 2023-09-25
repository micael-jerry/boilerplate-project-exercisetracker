const { saveExercise, findAllExercises } = require("../services/exercise.service")

const postExercise = (req, res) => {
    saveExercise(req.params.userId, req.body)
        .then((r) => res.json(r))
        .catch((e) => res.status(400).json(e));
}

const getExercise = (req, res) => {
    findAllExercises(req.params.userId)
        .then((r) => res.json(r))
        .catch((e) => res.status(400).json(e));
}

module.exports.postExercise = postExercise;
module.exports.getExercise = getExercise;