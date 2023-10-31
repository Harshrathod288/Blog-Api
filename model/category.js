const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cateSchema = new Schema({
    Name: String,
    Image: String,
});

const CATEGORY = mongoose.model('category', cateSchema);

module.exports = CATEGORY;