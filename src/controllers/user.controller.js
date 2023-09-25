const { findAllUsers, findUserById, saveUser } = require("../services/user.service");

const getUsers = (req, res) => {
    findAllUsers()
        .then((r) => res.json(r))
        .catch((e) => res.status(400).json(e));
}

const getUserById = (req, res) => {
    findUserById(req.params.userId)
        .then((r) => res.json(r))
        .catch((e) => res.status(400).json(e));
}

const postUser = async (req, res) => {
    saveUser(req.body)
        .then((r) => res.json(r))
        .catch((e) => res.status(400).json(e));
}

module.exports.getUsers = getUsers;
module.exports.getUserById = getUserById;
module.exports.postUser = postUser;