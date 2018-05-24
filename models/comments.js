const mongoose = require('mongoose');
const { Schema } = mongoose;
const User = mongoose.model('users');

const CommentSchema = new Schema({
  text: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 160
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
});

mongoose.model('comments', CommentSchema);
