const express = require('express');
const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSK);
const requireLogin = require('../middlewares/require_login');
const router = express.Router();


//POST payments
router.post('/', requireLogin, async (req, res) => {
  if(!req.user) {
    return res.status(401).send({ error:'Must be logged in' });
  }

  try {
    const charge = await stripe.charges.create({
      amount: 100,
      currency: "usd",
      description: "React Campaign $1 for 5 credits charge",
      source: req.body.id
    });

    req.user.credits += 5
    const user = await req.user.save();
    res.status(200).send(user);
  }

  catch (err) {
    res.status(422).send(err);
  }
});

module.exports = router;
