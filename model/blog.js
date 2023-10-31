const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BlogPost = new Schema({
  title: String,
  discription: String,
  image: String,
  category: { type: Schema.Types.ObjectId, ref: 'category' }, 
  user: { type: Schema.Types.ObjectId, ref: 'user' }
});

const BLOGPOST = mongoose.model('Blog', BlogPost);

module.exports = BLOGPOST;