const { findAllLogs } = require("../services/log.service");

const getAllLogs = (req, res) => {
    findAllLogs(req.params.userId)
        .then((r) => res.json(r))
        .catch((e) => res.status(400).json(e));
}

module.exports.getAllLogs = getAllLogs;