const mongoose = require('mongoose');

const UserSchema =new mongoose.Schema({
    username: {type: String, unique: true}, // for each username to be unique;
    password: String,
}, {timestamps: true});
const UserModel = mongoose.model('User',UserSchema);
module.exports = UserModel;