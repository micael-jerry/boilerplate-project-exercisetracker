const { findAllLogs } = require("../services/log.service");

const getAllLogs = (req, res) => {
    const from = req.query.from ? new Date(req.query.from) : new Date(0);
    const to = req.query.to ? new Date(req.query.to) : new Date();
    const limit = parseInt(req.query.limit) ? parseInt(req.query.limit) : null;

    findAllLogs(req.params.userId, from, to, limit)
        .then((r) => res.json(r))
        .catch((e) => res.status(400).json(e));
}

module.exports.getAllLogs = getAllLogs;