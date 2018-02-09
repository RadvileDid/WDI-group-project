const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
});

commentSchema.set('toJSON', { virtuals: true });

const movieGroupSchema = new mongoose.Schema({
  movieId: { type: Number },
  comments: [ commentSchema ],
  users: [{ type: mongoose.Schema.ObjectId, ref: 'User' }]
});

movieGroupSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('MovieGroup', movieGroupSchema);


// angular select feature when searching that creates a dropdown based on search queries
