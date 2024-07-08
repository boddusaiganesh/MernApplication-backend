const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: String,
  teacherId: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model('Course', courseSchema);
