const express        = require('express');
const passport       = require('passport');
const keys           = require('../config/keys');
const stripe         = require('stripe')(keys.stripeSK);
const requireLogin   = require('../middlewares/require_login');
const router         = express.Router();

/********************************************
/API Routes
********************************************/
router.get('/', (req, res ) => {
  res.render('index', { title: 'React Campaign Homepage API' });
});

router.get( '/current_user', function(req, res) {
  res.send(req.user);
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/')
});


//POST payments
router.post('/stripe', requireLogin, async (req, res) => {
  if(!req.user) {
    return res.status(401).send({ error:'Must be logged in' });
  }

  const charge = await stripe.charges.create({
    amount: 100,
    currency: "usd",
    description: "React Campaign $1 for 5 credits charge",
    source: req.body.id
  });

  req.user.credits += 5
  const user = await req.user.save();
  res.send(user);
});



module.exports = router;
