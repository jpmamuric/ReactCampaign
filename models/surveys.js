const mongoose = require('mongoose');
const { Schema } = mongoose;

const RecipientSchema = require('./recipient');

// MONGO DB size limit per record = 4mb
// 1 Survey <= 4mb
const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [RecipientSchema],
  respondedYes: { type: Number, default: 0 },
  respondedNo: { type: Number, default: 0 },
  _user: { type: Schema.Types.ObjectId, ref: 'users' },
  dateSent: Date,
  lastResponded: Date
});

mongoose.model('surveys', surveySchema);
