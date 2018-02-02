const mongoose = require('mongoose');
// const bcrypt = require('bcrypt'); <-- to be used with password encryption

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});


userSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', userSchema);
