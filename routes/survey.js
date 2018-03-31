const express        = require('express');
const _              = require('lodash');
const Path           = require('path-parser');
const { URL }        = require('url');
const mongoose       = require('mongoose');
const requireLogin   = require('../middlewares/require_login');
const requireCredits = require('../middlewares/require_credits');
const Mailer         = require('../services/mailer');
const surveyTemplate = require('../services/templates/template_survey')
const Survey         = mongoose.model('surveys');
const router         = express.Router();


/********************************************
/api/survey Routes
********************************************/
router.get('/', requireLogin, async (req, res) => {
  const surveys = await Survey.find({ _user: req.user.id })
    .select({ recipients: false });

  res.send(surveys);
});

router.get('/:surveyId/:choice', (req, res) => {
  res.send('Thank you for your feedback!');
});

//POST create survey
router.post('/', requireLogin, requireCredits, async (req, res) => {
  const { title, subject, body, recipients } = req.body;

  const survey = new Survey({
    title,
    subject,
    body,
    recipients: recipients.split(',').map(email => ({ email: email.trim().toLowerCase() })),
    _user: req.user.id,
    dateSent: Date.now()
  });

  const mailer = new Mailer(survey, surveyTemplate(survey));

  try {
    await mailer.send();
    await survey.save();
    req.user.credits -= 1;
    const user = await req.user.save();
    res.send(user);
  }
  catch (err) {
    res.status(422).send(err);
  }

});

// SENDGRID API Local tunnel setup Testing route
// https://reactcampaigndev.localtunnel.me/api/surveys/webhooks

router.post('/webhooks', (req, res) => {
  const p = new Path('/api/surveys/:surveyId/:choice');

  const events = _.chain(req.body)
    .map(({ email, url }) => {
      const match = p.test(new URL(url).pathname);
      if ( match ) {
        return { email, surveyId: match.surveyId, choice: match.choice };
      }
    })

    // remove any webhook events that were returned (false, null, 0, "", undefined, and NaN)
    .compact()
    // filter out any duplicate webhooks events
    .uniqBy('email', 'surveyId')

    //execute query of filtered elements
    .each(({ surveyId, email, choice }) => {
      // Never Use FindById because it return entire collection
      Survey.updateOne({
        _id: surveyId,
        recipients: {
          $elemMatch: {  email: email, respondedToSurvey: false }
        }
      }, {
        $inc: { [choice]: 1 },
        $set: { 'recipients.$.respondedToSurvey': true },
        lastResponded: new Date()
      })
      .exec();
    })

    // pull out array
    .value();

    console.log(events);

  res.send({});
});

module.exports = router;
