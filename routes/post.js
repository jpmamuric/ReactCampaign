const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Post = mongoose.model('posts');

/********************************************
GET
********************************************/
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find({ user: req.user.id }).populate('comments');
    res.status(200).send(posts);
  } catch (err) {
    res.status(422).send({ message: 'unable to get posts', err });
  }
});

router.get('/:postId', async (req, res, next) => {
  const { postId } = req.params;
  const post = await Post.findOne({ _id: postId });
  try {
    res.status(200).send({ message: 'posts retrieved', post });
  }

  catch (err) {
    res.status(422).send({ message: 'unable to get posts', err });
  }
});

/********************************************
POST
********************************************/
router.post('/:userId', async (req, res, next) => {
  const User = mongoose.model('users');
  const { title, content } = req.body;
  const { userId } = req.params;
  try {

    const post = new Post({ title, content, user: userId });

    const savedPost = await post.save();

    const updatedUser = await User.findOneAndUpdate(
      { _id: userId },
      { $push: { posts: savedPost }},
      { new: true }
    ).populate('posts');

    return res.status(200).send({ message: 'post saved', updatedUser });
  } catch (err){
    return res.status(422).send({ message: 'unable to process post', err });
  }
});

/********************************************
DELETE
********************************************/
router.delete('/:postId', async (req, res, next) => {
  try {
    const post = await Post.findOne({ _id: req.params.postId });
    await post.remove();
    return res.status(200).send({ message: 'post successfully removed'});
  } catch(err) {
    return res.status(500).send({ message: 'something went wrong', err });
  }
});

router.put('/:postId', async (req, res, next) => {
  const { postId } = req.params;

  try {
    let updatedpost = await Post.findOneAndUpdate(
      { _id: postId }
      // { $set: }
    )
    return res.status(200).send()
  } catch (err) {
    return next(err);
  }
});


module.exports = router;
