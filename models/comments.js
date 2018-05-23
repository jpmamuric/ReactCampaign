const mongoose = require('mongoose');
const { Schema } = mongoose;

const CommentSchema = new Schema({
  content: {
    type: String,
    required: [true, 'content is required'],
    validate: title => content.length > 10,
    message: 'Content must be longer than 10 characters'
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
});

mongoose.model('comments', CommentSchema);
