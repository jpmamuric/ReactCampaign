const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: { type: String, required: true },
  googleName: { type: String, required: true },
  createdAt: String,
  credits : { type: Number, default: 0 }
});

mongoose.model('users', userSchema);
