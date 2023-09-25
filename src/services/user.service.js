const { UserModel } = require("../models/user.model")

const findAllUsers = async () => {
    const users = await UserModel.find();
    return users;
}

const findUserById = async (userId) => {
    const user = await UserModel.findById(userId);
    return user;
}

const saveUser = async (user) => {
    const userModel = UserModel({
        username: user.username
    });
    const userSaved = await userModel.save();
    return userSaved;
}

module.exports.findAllUsers = findAllUsers;
module.exports.findUserById = findUserById;
module.exports.saveUser = saveUser;