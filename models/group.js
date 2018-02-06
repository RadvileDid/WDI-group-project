const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
  users: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  movieId: { type: Number }
});


groupSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Group', groupSchema);


// angular select feature when searching that creates a dropdown based on search queries
