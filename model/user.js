const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    Name: String,
    Email: String,
    Age: Number,
    Password: String
});

const USER = mongoose.model('user', userSchema);

module.exports = USER;