const mongoose = require('mongoose');

const markSchema = new mongoose.Schema({
  studentId: mongoose.Schema.Types.ObjectId,
  subject: String,
  marks: Number,
});

module.exports = mongoose.model('Mark', markSchema);
