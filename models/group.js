const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
  users: [{ type: mongoose.Schema.ObjectId, ref: 'User' }], //shall we name this something else?
  movie: {
    title: {type: String, required: true},
    image: {type: String, required: true}
  }
});


groupSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Group', groupSchema);


// angular select feature when searching that creates a dropdown based on search queries
