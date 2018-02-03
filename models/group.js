const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
  groupUsers: [{ type: mongoose.Schema.ObjectId, ref: 'User', required: true }]
});


groupSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Group', groupSchema);
