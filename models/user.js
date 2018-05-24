const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: { type: String, required: true },
  googleName: { type: String, required: true },
  createdAt: String,
  credits : { type: Number, default: 0 },
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'posts'
  }]
});

// userSchema.pre('remove', async function(next){
//   //load through initialized model to avoid syncronous require errors
//   const Posts = mongoose.model('posts');
//   const Survey = mongoose.model('surveys');
//   try {
//     await Post.remove({ _id: { $in: this.posts } });
//     await Survey.remove({ _user: this._id });
//     return next();
//   }
//   catch(err) {
//     return next(err);
//   }
// });

mongoose.model('users', userSchema);
