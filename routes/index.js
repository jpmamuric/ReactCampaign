const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = mongoose.model('users');

/********************************************
/API Routes
********************************************/
router.get('/current_user', async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.id }).populate('posts');
    res.status(200).send(user);
  } catch (err) {
    res.send(err);
  }
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/')
});

// router.delete('/delete_account', async (req, res, next) => {
//   try {
//     await User.remove({ _id: req.user.id });
//     return res.status(200).send(req.user);
//   }
//   catch(err) {
//     return next(err);
//   }
// });

module.exports = router;
