const { saveExercise, findAllExercises } = require("../services/exercise.service")

const postExercise = (req, res) => {
    saveExercise(req.params.userId, req.body)
        .then((r) => res.json(r))
        .catch((e) => res.status(400).json(e));
}

const getExercise = (req, res) => {
    const from = req.query.from ? new Date(req.query.from) : new Date(0);
    const to = req.query.to ? new Date(req.query.to) : new Date();
    const limit = parseInt(req.query.limit) ? parseInt(req.query.limit) : Number.MAX_SAFE_INTEGER;

    findAllExercises(req.params.userId, from, to, limit)
        .then((r) => res.json(r))
        .catch((e) => res.status(400).json(e));
}

module.exports.postExercise = postExercise;
module.exports.getExercise = getExercise;