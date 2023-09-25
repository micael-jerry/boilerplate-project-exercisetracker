const { UserModel } = require("../models/user.model");

const getUsers = async (req, res) => {
    const users = await UserModel.find();
    res.json(users);
}

const getUserById = async (req, res) => {
    const user = await UserModel.findById(req.params.id);
    res.json(user);
}

const postUser = async (req, res) => {
    let createUser = UserModel({
        username: req.body.username
    });
    createUser.save()
        .then((saveRes) => res.json(saveRes))
        .catch((saveErr) => res.status(400).json(saveErr));
}

module.exports.getUsers = getUsers;
module.exports.getUserById = getUserById;
module.exports.postUser = postUser;