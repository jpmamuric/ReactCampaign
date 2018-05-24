const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Comments = mongoose.model('comments');

router.get('/:commentId', async (req, res, next) => {
  const { commentId } = req.params;
  const comment = await Comments.findOne({ _id: commentId }).populate('users');
  try {
    res.status(200).send({ message: 'comment retrieved', comment });
  }

  catch (err) {
    res.status(422).send({ message: 'unable to fetch comment', err });
  }
});

router.post('/:postId', async (req, res, next) => {
  const Post = mongoose.model('posts');
  const { content } = req.body;
  const { postId } = req.params;
  try {

    const comment = new Comments({ content, user: req.user.id });

    const savedComment = await comment.save();

    const updatedPost = await Post.findOneAndUpdate(
      { _id: postId },
      { $push: { comments: savedComment } },
      { new: true }
    ).populate('comments');

    res.status(200).send({ message: 'comment saved', updatedPost });
  }
 catch (err){
   res.status(422).send({ message: 'unable to process comment', err });
 }
});

module.exports = router;
