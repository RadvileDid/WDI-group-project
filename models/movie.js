const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
});

commentSchema.set('toJSON', { virtuals: true });

const movieSchema = new mongoose.Schema({
  movieId: { type: Number },
  comments: [ commentSchema ],
  users: [{ type: mongoose.Schema.ObjectId, ref: 'User' }]
});

movieSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Movie', movieSchema);


// angular select feature when searching that creates a dropdown based on search queries
