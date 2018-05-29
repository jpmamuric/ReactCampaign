const mongoose = require('mongoose');
const { Schema } = mongoose;

const PostSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    validate: title => title.length > 2
  },
  content: {
    type: String,
    required: [true, 'content is required'],
    validate: content => content.length >= 2
  },
  likes: { type: Number, default: 0 },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'comments'
  }],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  createdAt: { type: Date, default: Date.now }
});


PostSchema.pre('remove', async function(next) {
  const User = mongoose.model('users');
  try {
    await User.update(
      { _id: this.user },
      { $pull: { posts: this._id } }
    );
    return next();
  } catch(err){
    return next(err);
  }
});


mongoose.model('posts', PostSchema);
