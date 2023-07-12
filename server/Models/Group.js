const mongoose = require('mongoose');

const GroupSchema =new mongoose.Schema({
   members: Array,
   groupname:{type: String, required: true, unique: true, minlength: 3},
}, {timestamps: true});
const GroupModel = mongoose.model('Group',GroupSchema);
module.exports = GroupModel;