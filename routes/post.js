const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Post = mongoose.model('posts');

router.get('/:postId', async (req, res, next) => {
  const { postId } = req.params;
  const post = await Post.findOne({ _id: postId });
  try {
    res.status(200).send({ message: 'posts retrieved', post });
  }

  catch (err) {
    res.status(422).send({ message: 'unable to fetch posts', err });
  }
});

router.post('/:userId', async (req, res, next) => {
  const User = mongoose.model('users');
  const { title, content } = req.body;
  const { userId } = req.params;
  try {

    const post = new Post({ title, content });

    const savedPost = await post.save();

    const updatedUser = await User.findOneAndUpdate(
      { _id: userId },
      { $push: { posts: savedPost }},
      { new: true }
    ).populate('posts');

    res.status(200).send({ message: 'post saved', updatedUser });
  }
 catch (err){
   res.status(422).send({ message: 'unable to process post', err });
 }
});


module.exports = router;
