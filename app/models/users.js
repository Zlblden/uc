const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema   = new Schema({
    phone: String,
    email: String
});

module.exports = mongoose.model('User', UsersSchema);