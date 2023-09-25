const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    }
});

module.exports.UserModel = mongoose.model('User', userSchema);